package controller;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.*;
import javax.servlet.http.*;

import com.google.gson.Gson;

import app.Guest;

/**
 * @author levi
 */
@WebServlet(name = "guestServlet", urlPatterns = { "*.ajax" })
@SuppressWarnings({"serial", "unchecked"})
public class GuestServlet extends HttpServlet {

	/* retrieve or create session here as needed */
	private List<Guest> loadGuestList(HttpServletRequest request) {
		HttpSession sess = request.getSession();
		List<Guest> guestList = (List<Guest>) sess.getAttribute("guestList");
		if (guestList == null) {
			guestList = new ArrayList<Guest>();
			sess = request.getSession();
			sess.setAttribute("guestList", guestList);
		}
		return guestList;
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		List<Guest> guestList = loadGuestList(request);
		request.setAttribute("guestList", guestList);
		RequestDispatcher view = request.getRequestDispatcher("guests.jsp");
		view.forward(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();

		List<Guest> guestList = loadGuestList(request);

		/* get input */
		String firstInput = request.getParameter("first");
		String lastInput = request.getParameter("last");
		guestList.add(new Guest(firstInput, lastInput));

		String JSONguests;
		JSONguests = new Gson().toJson(guestList);

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.write(JSONguests);
	}

}
