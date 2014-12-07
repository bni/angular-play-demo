package services;

import java.io.InputStream;

public interface ResourceService {
    InputStream getResourceStream(String path);
}
