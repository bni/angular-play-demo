package controllers;

import play.Play;
import play.mvc.Controller;
import play.mvc.Result;

import java.io.InputStream;

public class PhoneController extends Controller {
    public Result phoneInfo(String phone) {
        response().setContentType("application/json");

        InputStream is = Play.application().classloader().getResourceAsStream("phones/" + phone + ".json");

        return ok(is);
    }

    public Result phoneImage(String image) {
        response().setContentType("image/jpeg");

        InputStream is = Play.application().classloader().getResourceAsStream("phones/images/" + image);

        return ok(is);
    }
}
