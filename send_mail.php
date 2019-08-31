<?php
	extract($_REQUEST);
	require("mail/class.phpmailer.php");
	
	$mail = new PHPMailer();
	
	$mail->IsSMTP();
	$mail->Host = "prenterpriseco.com";
	$mail->SMTPAuth = true;
	//$mail->SMTPSecure = "ssl";
	$mail->Port = 587;
	$mail->Username = "customercare@prenterpriseco.com";
	$mail->Password = "qVe,;MCVT{7+";
	
	$mail->From = "customercare@prenterpriseco.com";
	$mail->FromName = "PR Enterprise";
	$mail->AddAddress("mhe.soluation@gmail.com");
	//$mail->AddReplyTo("mail@mail.com");
	
	$mail->IsHTML(true);
	
	$mail->Subject = "Inquiry query Arrive";
	$mail->Body = "<h3><span style=color: #0000ff;>Hello Sir, </span></h3>
		<h3>&nbsp;</h3>
		<h3><span style=color: #0000ff;>This is&nbsp;<span id=GingerWidget-correction-0 class=correction  alternate>an inquiry Notification</span>&nbsp;at PREnterpriseco.com. </span></h3>
		<h3><span style=color: #0000ff;>Please, coordinate on bellow following details.</span></h3>
		<p>&nbsp;</p>
		<h3 style=padding-left: 30px;><span style=color: #0000ff;>Name<span id=GingerWidget-correction-1 class=correction  alternate>:</span>&nbsp;$name&nbsp;</span></h3>
		<h3 style=padding-left: 30px;><span style=color: #0000ff;>Email<span id=GingerWidget-correction-2 class=correction  alternate>:</span>&nbsp;$email&nbsp;</span></h3>
		<h3 style=padding-left: 30px;><span style=color: #0000ff;><span id=GingerWidget-correction-3 class=correction  alternate>Send</span>&nbsp;Message<span id=GingerWidget-correction-4 class=correction  alternate>:</span>&nbsp;$msg&nbsp;</span></h3>
		<h3>&nbsp;</h3>
		<h3><span style=color: #0000ff;>Thanks</span></h3>";
	//$mail->AltBody = "This is the body in plain text for non-HTML mail clients";
	
	
	if(!$mail->Send())
	{
	echo '<script language="javascript">';
	echo 'alert("message not sent due to technical issue. 😖")' ;
	echo '</script>';
	// echo "Message could not be sent. <p>";
	// echo "Mailer Error: " . $mail->ErrorInfo;
	exit;
	}
	
	echo '<script language="javascript">';
	echo 'alert("Message sent successfully! ✌")';
	echo '</script>';
	
	header("Refresh:0; url=index.php");
?>