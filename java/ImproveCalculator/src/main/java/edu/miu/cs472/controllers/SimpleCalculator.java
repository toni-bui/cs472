package edu.miu.cs472.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/calculator")
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
            n[i] = parse(request, "n" + String.valueOf(i + 1));
        }
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write((n[0] + n[1]) + "|" + (n[2] - n[3]) + "|" + (n[4] * n[5]) + "|" + (n[7] != 0 ? n[6] / n[7] : "NaN"));
    }

}
