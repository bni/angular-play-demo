package services;

import com.google.inject.ImplementedBy;

import java.io.InputStream;

@ImplementedBy(RealResourceService.class)
public interface ResourceService {
    InputStream getResourceStream(String path);
}
