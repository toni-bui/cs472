<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
<title>Simple Calculator</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" />
<link rel="stylesheet" href="css/style.css" />
</head>
<body>
<div class="container">
	<form method="post" id="calculator" action="/SimpleCalculator/calculator">
		<div class="row">
			<h3>Result:</h3>
		</div>
		<div class="row">Plus: <%= request.getAttribute("sum") %></div>
		<div class="row">Subtract: <%= request.getAttribute("subtract") %></div>
		<div class="row">Multiply: <%= request.getAttribute("multifly") %></div>
		<div class="row">Divide: <%= request.getAttribute("divide") %></div>
	</form>
</div>
</body>
</html>
