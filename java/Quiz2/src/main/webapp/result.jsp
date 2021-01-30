<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
<title>JSP Number Quiz</title>
<link href="/resources/style.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<h1>The Number Quiz</h1>
	${quiz.result}
	<p>Your score is ${quiz.score} and you have grade <span class="red">${quiz.grade}</span></p>
</body>
</html>
