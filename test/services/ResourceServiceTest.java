package services;

import java.io.InputStream;

import org.junit.Before;
import org.junit.Test;
import play.test.*;

import static org.junit.Assert.assertNotNull;

public class ResourceServiceTest extends WithApplication {
    private ResourceService resourceService;

    @Before
    public void before() throws Exception {
        resourceService = new RealResourceService();
    }

    @Test
    public void getResourceStream() throws Exception {
        InputStream stream = resourceService.getResourceStream("phones/phones.json");

        assertNotNull(stream);
    }
}