package edu.miu.cs472.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.RequestDispatcher;

import java.io.IOException;
import java.util.List;

import edu.miu.cs472.models.BeerExpert;

public class BeerSelection extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String c = request.getParameter("color");
		BeerExpert be = new BeerExpert();
		List<String> res = be.getBrands(c);
		request.setAttribute("styles", res);
		request.setAttribute("adminEmail", getServletConfig().getInitParameter("adminEmail"));
		RequestDispatcher view = request.getRequestDispatcher("result.jsp");
		view.forward(request, response);
	}

}
