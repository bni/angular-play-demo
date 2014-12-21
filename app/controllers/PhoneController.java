package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import services.ResourceService;

import javax.inject.Inject;

public class PhoneController extends Controller {
    @Inject
    private ResourceService resourceService;

    public Result list() {
        response().setContentType("application/json");

        return ok(resourceService.getResourceStream("phones/phones.json"));
    }

    public Result fetchDetail(String phoneId) {
        response().setContentType("application/json");

        return ok(resourceService.getResourceStream("phones/" + phoneId + ".json"));
    }

    public Result getImage(String fileName) {
        response().setContentType("image/jpeg");

        return ok(resourceService.getResourceStream("phones/images/" + fileName));
    }
}
