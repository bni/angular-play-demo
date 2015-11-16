package security;

import play.libs.F.Promise;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Proxy;
import java.util.Arrays;
import java.util.Collections;

class AuthorizedAction extends Action.Simple {
    @Override
    public Promise<Result> call(Http.Context ctx) throws Throwable {
        String[] callerRoles = ctx.session().get("roles") == null ? null : ctx.session().get("roles").split(",");

        InvocationHandler invocationHandler = Proxy.getInvocationHandler(this.configuration);
        String[] annotationRoles = (String[])invocationHandler.invoke(this.configuration, Authorized.class.getDeclaredMethod("roles"), null);

        // Allow passage if any caller role matches any annotation role
        if (callerRoles != null && annotationRoles != null && !Collections.disjoint(Arrays.asList(callerRoles), Arrays.asList(annotationRoles))) {
            return delegate.call(ctx);
        } else {
            return Promise.pure(unauthorized());
        }
    }
}
