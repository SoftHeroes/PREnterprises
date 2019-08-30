<?php
	extract($_REQUEST);
	$body="<h3><span style=color: #0000ff;>Hello Sir, </span></h3>
	<h3>&nbsp;</h3>
	<h3><span style=color: #0000ff;>This is&nbsp;<span id=GingerWidget-correction-0 class=correction  alternate>an inquiry Notification</span>&nbsp;from PREnterpriseco.com. </span></h3>
	<h3><span style=color: #0000ff;>Please, coordinate on bellow following details.</span></h3>
	<p>&nbsp;</p>
	<h3 style=padding-left: 30px;><span style=color: #0000ff;>Name<span id=GingerWidget-correction-1 class=correction  alternate>:</span>&nbsp;$name </span></h3>
	<h3 style=padding-left: 30px;><span style=color: #0000ff;>Email<span id=GingerWidget-correction-2 class=correction  alternate>:</span>&nbsp;$email&nbsp;</span></h3>
	<h3 style=padding-left: 30px;><span style=color: #0000ff;><span id=GingerWidget-correction-3 class=correction  alternate>Send</span>&nbsp;Message<span id=GingerWidget-correction-4 class=correction  alternate>:</span>&nbsp;$msg </span></h3>
	<h3>&nbsp;</h3>
	<h3><span style=color: #0000ff;>Thanks</span></h3>";
	
	
	$to ='mhe.soluation@gmail.com';
	$subject = "Inquiry query Arrive";
	
	$message = $body;
	$headers = "From: support@prenterpriseco.com" ."\r\n";
	
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	
	// More headers
	$headers .= 'From: UK Micro Finance <ukmf.in>' . "\r\n";
	if(mail($to,$subject,$message,$headers))
	{
        echo '<script language="javascript">';
        echo 'alert("Message sent successfully! ✌")';
        echo '</script>';
	}
	else
    {
        echo '<script language="javascript">';
        echo 'alert("message not sent due to technical issue. 😖")' ;
        echo '</script>';
    }
	header("Refresh:0; url=index.php");
	?>