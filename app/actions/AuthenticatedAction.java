package actions;

import com.google.inject.Inject;
import play.cache.CacheApi;
import play.libs.F;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

public class AuthenticatedAction extends Action.Simple {
    @Inject
    private CacheApi cache;

    @Override
    public F.Promise<Result> call(Http.Context ctx) throws Throwable {
        String token = ctx.request().getHeader("X-XSRF-TOKEN");

        String email = cache.get(token);

        if (email != null) {
            return delegate.call(ctx);
        } else {
            return F.Promise.pure(Results.unauthorized());
        }
    }
}
