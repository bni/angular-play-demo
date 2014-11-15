package controllers;

import play.Play;
import play.mvc.Controller;
import play.mvc.Result;

import java.io.InputStream;

public class PhoneController extends Controller {
    public Result phoneInfo(String phone) {
        response().setContentType("application/json");

        return ok(getResourceStream("phones/" + phone + ".json"));
    }

    public Result phoneImage(String image) {
        response().setContentType("image/jpeg");

        return ok(getResourceStream("phones/images/" + image));
    }

    private InputStream getResourceStream(String path) {
        return Play.application().classloader().getResourceAsStream(path);
    }
}
