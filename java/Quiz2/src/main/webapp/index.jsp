<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
<title>JSP Number Quiz</title>
<link href="/resources/style.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<form action="/AgeValidator" method="post">
		<h1>The Number Quiz</h1>
		<%
			String err = (String)request.getAttribute("error");
			if (err != null && !err.trim().isEmpty()) {
				out.print("<p class=\"red\">" + err + "</p>");
			}
		%>
		<label>Your age:</label>
		<input type="number" name="age" size="18" />
		<input type="submit" value="Next" />
	</form>
</body>
</html>
