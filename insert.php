<?php
$conn=new mysqli("localhost","root","","conv");

if(isset($_POST['submit'])&&($_POST['phone']))
{
    $id=0;
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$Websitetype=$_POST['Websitetype'];
	$WebpageRequired=$_POST['WebpageRequired'];
	$Contentwriting=$_POST['Contentwriting'];
	$WebsiteRequiredin=$_POST['WebsiteRequiredin'];
	$HostingServices=$_POST['HostingServices'];
	$LogoDesign=$_POST['LogoDesign'];

           
           if(!preg_match("/^[6-9]\d{9}$/",$phone)){
           	      return false;
              }
           else{
            $sql="insert into tbl_conv values('$id','$name','$email','$phone','$Websitetype','$WebpageRequired','$Contentwriting','$WebsiteRequiredin','$HostingServices','$LogoDesign')";
       
            }
	if(mysqli_query($conn,$sql)==True)
	{
		include 'contact.html';
    }
    else { 
	echo"<script>
	alert('your data has not inserted successfully');
	window.location.href='index.php';
	</script>";

     }
}

mysqli_close($conn);

?>


