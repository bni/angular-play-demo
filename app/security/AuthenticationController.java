package security;

import com.fasterxml.jackson.databind.JsonNode;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.UUID;

public class AuthenticationController extends Controller {
    @BodyParser.Of(BodyParser.Json.class)
    public Result login() {
        JsonNode json = request().body().asJson();

        String email = json.findPath("email").textValue();
        String password = json.findPath("password").textValue();

        // TODO Check this towards a database or LDAP
        if (email != null && "bob".equals(email) && password != null && "secret".equals(password)) {
            String token = UUID.randomUUID().toString();

            response().setCookie("XSRF-TOKEN", token);

            session("token", token);
            session("email", email);
            session("fullName", "Bob Secret");
            session("roles", "LISTER,EDITOR");

            return ok();
        }

        return badRequest();
    }

    public Result logout() {
        response().discardCookie("XSRF-TOKEN");

        session().clear();

        return ok();
    }
}
