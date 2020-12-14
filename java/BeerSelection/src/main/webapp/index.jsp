<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
<title>Beer Selection Page</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" />
</head>
<body>
<div class="container">
	<h1 align="center">Beer Selection Page</h1>
	<form method="post" action="/select_beer">
		<div class="row">
			<div class="col-md-4">
				<h3>Select Beer Characteristics </h3>
				<label>Color:</label>
				<select name="color" size="1">
					<option value="light">light</option>
					<option value="dark">dark</option>
					<option value="brown">brown</option>
					<option value="red">red</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<input type="submit" value="Submit" class="btn btn-primary" />
			</div>
		</div>
	</form>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>
</html>
