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
			<h3>Simple Calculator</h3>
		</div>
		<div class="row">
			<div class="col-md-4">
				<input type="number" name="n0" class="form-control" /> + <input type="number" name="n1" class="form-control" /> = <input type="text" id="plus" class="form-control" readonly />
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<input type="number" name="n2" class="form-control" /> - <input type="number" name="n3" class="form-control" /> = <input type="text" id="subtract" class="form-control" readonly />
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<input type="number" name="n4" class="form-control" /> * <input type="number" name="n5" class="form-control" /> = <input type="text" id="multiply" class="form-control" readonly />
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<input type="number" name="n6" class="form-control" /> / <input type="number" name="n7" class="form-control" /> = <input type="text" id="divide" class="form-control" readonly />
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
<script src="js/script.js"></script>
</body>
</html>
