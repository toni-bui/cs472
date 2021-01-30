package edu.miu.cs472.controllers;
import java.io.IOException;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.annotation.WebServlet;
// import javax.servlet.annotation.WebInitParam;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import edu.miu.cs472.models.BeerExpert;

// @WebServlet("/select_beer")
@WebServlet(
	name = "BeerSelection",
	description = "",
	urlPatterns = "/select_beer"
	// initParams =
	// {
	// 	@WebInitParam(name = "saveDir", value = "D:/FileUpload"),
	// 	@WebInitParam(name = "allowedTypes", value = "jpg,jpeg,gif,png")
	// }
)
public class BeerSelection extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// String saveDir = getInitParameter("saveDir");
		// String fileTypes = getInitParameter("allowedTypes");
		String c = request.getParameter("color");
		BeerExpert be = new BeerExpert();
		List<String> res = be.getBrands(c);
		request.setAttribute("styles", res);
		request.setAttribute("adminEmail", getServletConfig().getInitParameter("adminEmail"));
		RequestDispatcher view = request.getRequestDispatcher("result.jsp");
		view.forward(request, response);
	}
}
