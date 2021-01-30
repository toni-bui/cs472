package edu.miu.cs472.controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import edu.miu.cs472.models.Age;

public class AgeValidatorController extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			Age age = Age.from(request.getParameter("age"));
			request.getSession().setAttribute("age", age.getValue());
			response.sendRedirect("quiz");
		} catch (Exception ex) {
			request.setAttribute("error", ex.getMessage());
			RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
			dispatcher.forward(request, response);
		}
	}

}
