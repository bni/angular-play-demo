package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class TestController extends Controller {
    public static Result index() {
        return ok("hello");
    }
}
