<?php

require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host = "prenterpriseco.com";
$mail->SMTPAuth = true;
//$mail->SMTPSecure = "ssl";
$mail->Port = 587;
$mail->Username = "customercare@prenterpriseco.com";
$mail->Password = "qVe,;MCVT{7+";

$mail->From = "customercare@prenterpriseco.com";
$mail->FromName = "Test from Info";
$mail->AddAddress("shubhamjobanputra@gmail.com");
//$mail->AddReplyTo("mail@mail.com");

$mail->IsHTML(true);

$mail->Subject = "SMTP cHECK ";
$mail->Body = "Test Mail<b>in bold!</b>";
//$mail->AltBody = "This is the body in plain text for non-HTML mail clients";

if(!$mail->Send())
{
echo "Message could not be sent. <p>";
echo "Mailer Error: " . $mail->ErrorInfo;
exit;
}

echo "Message has been sent";

?>