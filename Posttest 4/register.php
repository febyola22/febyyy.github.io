<html>

<head>
	<link rel="stylesheet" href="style2.css">
  <title>REGISTER</title>
</head>
<body>
	<div class="main">
		<h1>Registrasi Cafe</h1>
		<div class="form1">
		<!--	Registration Form<br>!-->
			<form name="simple" onsubmit="return empty();" method="get" action="tampilan_data.php">
				<input type="text" id="req1" name="firstname" placeholder="Firstname"><br><br>		
				<!--<input type="text" id="req2" placeholder="Lastname"><br><br>-->
				<input type="text" id="req3" name="email_address" placeholder="Email address"><br><br>
				<!--<input type="text" id="req4" placeholder="Contact number" name="phone"><br><br>-->
				<input type="password" id="req5" name="password" placeholder="Password"><br>
								<br><input type="date" name="bday"><br><br>

	<!--Gender:
	<br>
	<input type="radio" name="gender">Male <input type="radio" name="gender">Female-->
				Gender:
				<select id="selection" name="gender">
					<option>Gender</option>
					<option>Male</option>
					<option>Female</option>
				</select>
				<br><br>
				<!-- <input type="submit" value="Submit" onclick="emailValidate(document.getElementById('req3'),'Invalid Email id.'),/*isNumeric(document.getElementById('req4'),'Enter digits in contact no.'),*/Selection(document.getElementById('selection'),'Please select gender')"> -->
				<input type="submit" value="submit"></input>

			</form>
		</div>	
	</div>


</body>
</html>