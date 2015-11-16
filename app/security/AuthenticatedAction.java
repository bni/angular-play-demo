package security;

import play.libs.F.Promise;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;

class AuthenticatedAction extends Action.Simple {
    @Override
    public Promise<Result> call(Http.Context ctx) throws Throwable {
        String headerToken = ctx.request().getHeader("X-XSRF-TOKEN");
        String sessionToken = ctx.session().get("token");

        // Allow passage if token from header matches token in session
        if (headerToken != null && headerToken.equals(sessionToken)) {
            return delegate.call(ctx);
        } else {
            return Promise.pure(unauthorized());
        }
    }
}
