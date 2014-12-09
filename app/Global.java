import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import play.Application;
import play.GlobalSettings;
import services.ResourceService;
import services.RealResourceService;

public class Global extends GlobalSettings {
    private Injector injector;

    @Override
    public void onStart(Application application) {
        injector = Guice.createInjector(new AbstractModule() {
            @Override
            protected void configure() {
                bind(ResourceService.class).to(RealResourceService.class);
            }
        });
    }

    @Override
    public <T> T getControllerInstance(Class<T> clazz) throws Exception {
        return injector.getInstance(clazz);
    }
}
