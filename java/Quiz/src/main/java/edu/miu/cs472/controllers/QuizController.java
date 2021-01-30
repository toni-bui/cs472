package edu.miu.cs472.controllers;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Cookie;
import java.io.IOException;
import java.io.PrintWriter;

import edu.miu.cs472.models.Quiz;

public class QuizController extends HttpServlet {

	protected void doGet1(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try{
			response.setContentType("text/html");
			PrintWriter pwriter = response.getWriter();
			String name = request.getParameter("userName");
			String password = request.getParameter("userPassword");
			pwriter.print("Hello "+name);
			pwriter.print("Your Password is: "+password);
			//Creating two cookies
			Cookie c1 = new Cookie("userName",name);
			Cookie c2 = new Cookie("userPassword",password);
			//Adding the cookies to response header
			response.addCookie(c1);
			response.addCookie(c2);
			pwriter.print("<br><a href='welcome'>View Details</a>");
			pwriter.close();
		} catch(Exception exp){
			System.out.println(exp);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();

		if (request.getParameter("replay") != null && !request.getParameter("replay").isEmpty()) {
			session.removeAttribute("quiz");
		}

		Object sessionAttribute = session.getAttribute("quiz");

		Quiz quiz = null;
		if (sessionAttribute == null) {
			quiz = new Quiz();
		} else {
			String answer = request.getParameter("answer");
			quiz = (Quiz) sessionAttribute;
			quiz.checkAnswer(answer);
		}
		session.setAttribute("quiz", quiz);

		PrintWriter out = response.getWriter();

		String html = "";
		if (quiz.hasNextQuestion()) {
			html = getNextQuestion(quiz);
		} else {
			html = getResult(quiz);
			quiz.preventResubmit();
		}

		response.setContentType("text/html");
		out.print(html);
	}

	private String getNextQuestion(Quiz quiz) {
		StringBuilder sb = new StringBuilder("<form method=\"POST\"><h1>The Number Quiz</h1>");
		sb.append("<p> Your score is ");
		sb.append(quiz.getScore());
		sb.append(".</p>");
		sb.append("<p> Guess the next number in the sequence.</p>");
		sb.append(quiz.getNextQuestion());
		sb.append("<p> Your answer: <input type=\"number\" name=\"answer\" /></p>");
		sb.append("<p><input type=\"submit\" value=\"Submit\" /></form>");
		return sb.toString();
	}

	private String getResult(Quiz quiz) {
		StringBuilder sb = new StringBuilder();
		sb.append("<h1>The Number Quiz</h1>");
		sb.append("<p> Your score is ");
		sb.append(quiz.getScore());
		sb.append(".</p>");
		sb.append("<p>You have completed the Number Quiz, with a score of ");
		sb.append(quiz.getScore());
		sb.append(" out of ");
		sb.append(quiz.totalQuestion());
		sb.append(".</p>");
		sb.append("<form method=\"POST\"><input type=\"submit\" name=\"replay\" value='Do Quiz Again' /></form>");
		return sb.toString();
	}
}
