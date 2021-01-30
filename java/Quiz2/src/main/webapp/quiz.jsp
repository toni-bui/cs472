<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
<title>JSP Number Quiz</title>
<link href="/resources/style.css" type="text/css" rel="stylesheet" />
</head>
<body>
<form action="/quiz" method="POST">
	<h1>JSP Number Quiz</h1>
	<p>Your age is ${age}</p>
	${quiz.result}
	<p>Your score is ${quiz.score}</p>
	<p>Guess the next number in the sequence.</p>
	<p>${quiz.nextQuestion}</p>
	<p>Your answer: <input type="text" name="answer" /></p>
	<p><input type="submit" value="Next" /></p>
</form>
</body>
</html>
