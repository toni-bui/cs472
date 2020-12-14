package edu.miu.cs472;

import java.net.URL;
import java.security.ProtectionDomain;

import org.eclipse.jetty.server.*;
import org.eclipse.jetty.util.thread.QueuedThreadPool;
import org.eclipse.jetty.webapp.WebAppContext;

import lombok.extern.log4j.Log4j;

@Log4j
public final class App {

    public static void main(String[] args) {
        int maxThreads = 100;
        int minThreads = 10;
        int idleTimeout = 60;
        QueuedThreadPool threadPool = new QueuedThreadPool(maxThreads, minThreads, idleTimeout);
        Server server = new Server(threadPool);
        try (ServerConnector connector = new ServerConnector(server)) {
            connector.setPort(8080);
            connector.setIdleTimeout(30000);
            server.setConnectors(new Connector[] {connector});
            ProtectionDomain domain = App.class.getProtectionDomain();
            URL location = domain.getCodeSource().getLocation();
            WebAppContext webapp = new WebAppContext();
            webapp.setWar(location.toExternalForm());
            server.setHandler(webapp);
            server.start();
            server.join();
        } catch (Exception ex) {
            log.error(ex.getMessage());
        }
    }
}
