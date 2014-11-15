package controllers;

import play.Play;
import play.mvc.Controller;
import play.mvc.Result;

import java.io.InputStream;

public class PhoneController extends Controller {
    public static Result index(String phoneId) {
        response().setContentType("application/json");

        InputStream is = Play.application().classloader().getResourceAsStream("phones/" + phoneId + ".json");

        return ok(is);
    }
}
