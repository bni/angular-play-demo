package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.inject.Inject;
import play.cache.CacheApi;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;

import java.util.UUID;

public class AuthenticationController extends Controller {
    @Inject
    private CacheApi cache;

    @BodyParser.Of(BodyParser.Json.class)
    public Result login() {
        JsonNode json = request().body().asJson();

        String email = json.findPath("email").textValue();
        String password = json.findPath("password").textValue();

        // TODO Check this towards a database or LDAP
        if (email != null && "bob".equals(email) && password != null && "secret".equals(password)) {
            String uuid = UUID.randomUUID().toString();

            cache.set(uuid, email, 60 * 15); // Expire in 15 mins

            response().setCookie("XSRF-TOKEN", uuid);

            return ok();
        }

        return badRequest();
    }

    public Result logout() {
        Http.Cookie cookie = request().cookie("XSRF-TOKEN");

        if (cookie != null) {
            cache.remove(cookie.value());
        }

        response().discardCookie("XSRF-TOKEN");

        return ok();
    }
}
