package security;

import play.mvc.With;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Methods annotated with this annotation will only be allowed to be called by authenticated users.
 *
 * Authenticated is true if caller sent token in header that matches the token stored in the session.
 * Play Framework has client side session stored in cookie PLAY_SESSION. The cookie is signed with
 * play.crypto.secret, so if tampered with it will be discarded. In that way security is maintained
 * without having to store any server side session information.
 */
@With(AuthenticatedAction.class)
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD})
public @interface Authenticated {
}
