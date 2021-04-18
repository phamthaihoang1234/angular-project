<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<%--<!DOCTYPE html>--%>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>BUYER FORM EDIT</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/back-to-admin-page">Admin Page</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="/show-buyer-list">Buyer List</a></li>
            <li><a href="/show-shop-list">Shop List</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="/shopee"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
        </ul>
    </div>
</nav>

<div style="margin-left: 300px; margin-top: 20px; font-size: large">
    <c:if test="${message != null}">
        <span style="color: red; font-size: xx-large">${message}</span>
    </c:if>
</div>

<div class="container" style="width: 50%; height: 50%; margin: auto">
    <h2>BUYER FORM EDIT</h2>
    <br>
    <div class="card">
        <div class="container">
            <div class="row">
                <form action="/show-edit-buyer-form?Buyerid=${buyer.getUserID()}" method="post">

                    <div class="details col-md-6">
                        <input type="text" name="Buyerid" hidden>

                        <h4 class="Buyer-title">Name:<input type="text" name="buyerName"
                                                            value="${buyer.getUserName()}"></h4>

                        <h4 class="buyer-email">Email: <input type="text" name="buyerEmail"
                                                              value="${buyer.getUserEmail()}">
                        </h4>
                        <h4 class="buyer-Password">Password: <input type="text" name="buyerPassword"
                                                                    value="${buyer.getUserPass()}"></h4>

                        <h4 class="buyer-Phonenumber">PhoneNumber:
                            <input type="text" name="buyerPhoneNumber" value="${buyer.getPhoneNumber()}">
                        </h4>
                        <h4 class="buyer-role">
                            <input type="hidden" name="buyerRole" value="${buyer.getUserRole()}">
                        </h4>

                        <div class="action">
                            <input type="submit" value="EDIT">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>



</div>
</body>
</html>