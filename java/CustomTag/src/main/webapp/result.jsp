<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Beer Recommend Page</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" />
</head>
<body>
<div class="container">
<h1 align="center">Beer Recommend Page</h1>
You may like below beer brands:
<ul>
<c:forEach var="style" items="${styles}">
	<li>${style}</li>
</c:forEach>
</ul>
<a href="/">Back</a>
</body>
</html>
