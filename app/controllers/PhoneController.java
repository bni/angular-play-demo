package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import services.ResourceService;

import javax.inject.Inject;

public class PhoneController extends Controller {
    @Inject
    private ResourceService resourceService;

    public Result phoneInfo(String phone) {
        response().setContentType("application/json");

        return ok(resourceService.getResourceStream("phones/" + phone + ".json"));
    }

    public Result phoneImage(String image) {
        response().setContentType("image/jpeg");

        return ok(resourceService.getResourceStream("phones/images/" + image));
    }
}
