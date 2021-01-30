package edu.miu.cs472.controllers;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

public class SimpleCalculator extends HttpServlet {

    private double parse(HttpServletRequest request, String parameter) {
        try {
            String val = request.getParameter(parameter).trim();
            return Double.parseDouble(val);
        } catch (Exception ex) {}
        return 0.0;
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double[] n = new double[8];
        for (int i = 0; i < n.length; i++) {
            n[i] = parse(request, "n" + String.valueOf(i));
        }
        request.setAttribute("sum", n[0] + " + " + n[1] + " = " + (n[0] + n[1]));
        request.setAttribute("subtract", n[2] + " + " + n[3] + " = " + (n[2] + n[3]));
        request.setAttribute("multifly", n[4] + " * " + n[5] + " = " + (n[4] * n[5]));
        request.setAttribute("divide", n[6] + " / " + n[7] + " = " + (n[7] != 0 ? n[6] / n[7] : "cannot divide"));
        request.getRequestDispatcher("result.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<title>A Sample Servlet!</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Hello, World!</h1>");
        out.println("</body></html>");
        out.close();
    }

}
