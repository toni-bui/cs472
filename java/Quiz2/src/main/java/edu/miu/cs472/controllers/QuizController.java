package edu.miu.cs472.controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

import edu.miu.cs472.models.Quiz;

public class QuizController extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();

		if (request.getParameter("reset") != null && !request.getParameter("reset").isEmpty()) {
			session.removeAttribute("quiz");
		}

		Object sessionAttribute = session.getAttribute("quiz");

		response.setContentType("text/html");
		Quiz quiz;
		if (sessionAttribute == null) {
			quiz = new Quiz();
		} else {
			String answer = request.getParameter("answer");
			quiz = (Quiz)sessionAttribute;
			quiz.checkAnswer(answer);
		}
		session.setAttribute("quiz", quiz);

		if (quiz.hasNextQuestion()) {
			RequestDispatcher view = request.getRequestDispatcher("quiz.jsp");
			view.forward(request, response);
		} else {
			RequestDispatcher view = request.getRequestDispatcher("result.jsp");
			view.forward(request, response);
		}

	}

	// protected void doPost2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	// 	HttpSession session = request.getSession();

	// 	if (request.getParameter("replay") != null && !request.getParameter("replay").isEmpty()) {
	// 		session.removeAttribute("quiz");
	// 	}

	// 	Object sessionAttribute = session.getAttribute("quiz");

	// 	Quiz quiz = null;
	// 	if (sessionAttribute == null) {
	// 		quiz = new Quiz();
	// 	} else {
	// 		String answer = request.getParameter("answer");
	// 		quiz = (Quiz) sessionAttribute;
	// 		quiz.checkAnswer(answer);
	// 	}
	// 	session.setAttribute("quiz", quiz);

	// 	PrintWriter out = response.getWriter();

	// 	String html = "";
	// 	if (quiz.hasNextQuestion()) {
	// 		html = getNextQuestion(quiz);
	// 	} else {
	// 		html = getResult(quiz);
	// 		quiz.preventResubmit();
	// 	}

	// 	response.setContentType("text/html");
	// 	out.print(html);
	// }

	// private String getNextQuestion(Quiz quiz) {
	// 	StringBuilder sb = new StringBuilder("<form method=\"POST\"><h1>The Number Quiz</h1>");
	// 	sb.append("<p> Your score is ");
	// 	sb.append(quiz.getScore());
	// 	sb.append(".</p>");
	// 	sb.append("<p> Guess the next number in the sequence.</p>");
	// 	sb.append(quiz.getNextQuestion());
	// 	sb.append("<p> Your answer: <input type=\"number\" name=\"answer\" /></p>");
	// 	sb.append("<p><input type=\"submit\" value=\"Submit\" /></form>");
	// 	return sb.toString();
	// }

	// private String getResult(Quiz quiz) {
	// 	StringBuilder sb = new StringBuilder();
	// 	sb.append("<h1>The Number Quiz</h1>");
	// 	sb.append("<p> Your score is ");
	// 	sb.append(quiz.getScore());
	// 	sb.append(".</p>");
	// 	sb.append("<p>You have completed the Number Quiz, with a score of ");
	// 	sb.append(quiz.getScore());
	// 	sb.append(" out of ");
	// 	sb.append(quiz.totalQuestion());
	// 	sb.append(".</p>");
	// 	sb.append("<form method=\"POST\"><input type=\"submit\" name=\"replay\" value='Do Quiz Again' /></form>");
	// 	return sb.toString();
	// }

}
