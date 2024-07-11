<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Basic JSP Form</title>
</head>
<body>
<h2>Basic Form</h2>
<form action="processForm.jsp" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    <input type="submit" value="Submit">
</form>
</body>
</html>
