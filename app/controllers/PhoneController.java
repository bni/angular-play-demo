package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import play.Logger;
import play.mvc.BodyParser;
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

    @BodyParser.Of(BodyParser.Json.class)
    public Result save() {
        JsonNode json = request().body().asJson();

        String phoneId = json.findPath("id").textValue();
        String name = json.findPath("name").textValue();

        Logger.info("Setting name: " + name + ", for phoneId: " + phoneId);

        response().setContentType("application/json");

        return ok(resourceService.getResourceStream("phones/" + phoneId + ".json"));
    }
}
