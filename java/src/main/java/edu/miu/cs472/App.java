package edu.miu.cs472;

import org.eclipse.jetty.server.*;
import org.eclipse.jetty.servlet.ServletHandler;
import org.eclipse.jetty.util.thread.QueuedThreadPool;

import lombok.extern.java.Log;

import edu.miu.cs472.controllers.Home;

@Log
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
            ServletHandler handler = new ServletHandler();
            handler.addServletWithMapping(Home.class, "/");
            server.setConnectors(new Connector[] {connector});
            server.setHandler(handler);
            server.start();
            server.join();
        } catch (Exception ex) {
            log.warning(ex.getMessage());
        }
    }
}
