<%@ page import="java.io.*, java.util.*, java.text.*" %>
<%
    String radiusStr = request.getParameter("radius");
    double radius = 0;
    double area = 0;
    boolean validInput = true;

    if (radiusStr != null && !radiusStr.isEmpty()) {
        try {
            radius = Double.parseDouble(radiusStr);
            area = Math.PI * radius * radius;
        } catch (NumberFormatException e) {
            validInput = false;
        }
    }
%>
<!DOCTYPE html>
<html>
<head>
    <title>Circle Area Calculator</title>
</head>
<body>
    <h1>Calculate Area of a Circle</h1>
    <form action="circleArea.jsp" method="post">
        <label for="radius">Enter Radius:</label>
        <input type="text" id="radius" name="radius" value="<%= (radiusStr != null) ? radiusStr : "" %>">
        <input type="submit" value="Submit">
    </form>

    <% if (radiusStr != null) { %>
        <% if (validInput) { %>
            <h2>Area of a Circle</h2>
            <p>The area of the circle with radius <%= radius %> is <%= area %>.</p>
        <% } else { %>
            <h2>Error</h2>
            <p>Please enter a valid number for the radius.</p>
        <% } %>
    <% } %>
</body>
</html>
