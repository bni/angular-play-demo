package security;

import play.mvc.With;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Methods annotated with this annotation will only be allowed to be called by users with the specified roles.
 *
 * If user has any or all roles specified, the call will be allowed.
 */
@With(AuthorizedAction.class)
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD})
public @interface Authorized {
    String[] roles();
}
