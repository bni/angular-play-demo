package security;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.HashMap;
import java.util.Map;

public class SessionInfoController extends Controller {
    @Authenticated
    public Result fetch() {
        response().setContentType("application/json");

        Map<String,String> sessionInfoMap = new HashMap<>();
        sessionInfoMap.put("email", session("email"));
        sessionInfoMap.put("fullName", session("fullName"));
        sessionInfoMap.put("roles", session("roles"));

        String sessionInfo;
        try {
            sessionInfo = new ObjectMapper().writeValueAsString(sessionInfoMap);
        } catch (JsonProcessingException e) {
            sessionInfo = "";
        }

        return ok(sessionInfo);
    }
}
