<%@ page import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Beer Result</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" />
</head>
<body>
<div class="container">
<h1>Beer Recommand Page</h1>
<div>
	<%
		List<String> styles = (List<String>) request.getAttribute("styles");
		Iterator<String> iter = styles.iterator();
		while (iter.hasNext()) {
			out.print("<br>You May Like :" + iter.next());
		}
		out.print("<br>Admin email: " + request.getAttribute("adminEmail"));
	%>
</div>
</body>
</html>
