<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
    <head>
        <title>Party Planner</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="resources/js/guests.js"></script>
    </head>
    <body>
            <p>Enter a name to be added to the guest list </p>
            <p>First <input id="first" type="text" name="first"  /></p>
            <p>Last <input id="last" type="text" name="last"  /></p>
            <p><input id="send" type="button" value="Send"  /></p>
            <p>Names so far</p>
            <div>
                <ul id="guestList">
                    <c:forEach var="guest" items="${guestList}">
                        <li>${guest.first}, ${guest.last}</li>
                    </c:forEach>
                </ul>
            </div>

    </body>
</html>
