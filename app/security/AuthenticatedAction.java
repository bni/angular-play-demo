package security;

import play.libs.F;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

public class AuthenticatedAction extends Action.Simple {
    @Override
    public F.Promise<Result> call(Http.Context ctx) throws Throwable {
        String token = ctx.request().getHeader("X-XSRF-TOKEN");

        if (token != null && token.equals(ctx.session().get("token"))) {
            return delegate.call(ctx);
        } else {
            return F.Promise.pure(Results.unauthorized());
        }
    }
}
