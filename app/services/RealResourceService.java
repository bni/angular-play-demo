package services;

import play.Play;

import java.io.InputStream;

public class RealResourceService implements ResourceService {
    @Override
    public InputStream getResourceStream(String path) {
        return Play.application().classloader().getResourceAsStream(path);
    }
}
