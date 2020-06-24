<!DOCTYPE html>
<html lang="en">
<head>
	<title>v7 quotation form</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script type="text/javascript" src="js/scripts.js"></script>
<script type="text/javascript">
   var started;
   function showLightBox()
  { 
    if (started) return;
    started = setTimeout(function(){
        Lightbox.start("images/Quotation Pricing.pgn");
        started;
    },500);
  }
  function stopShowLightBox(){
    if (started) {
        clearTimeout(started)
        started = 0;
    }
  }
</script>

</head>
</head>
<body>
	<nav>
		
		<ul>
			<li>
				<img src="images/Quotation Pricing.pgn" onMouseOver="javascript:showLightBox()" onMouseOut="javascript:stopShowLightBox()"
style="cursor: pointer;">
				<a href="showLightBox()" target="_blank";>pricing</a>
		       
		   </li>
		</ul>
	</nav>

      <marquee>Fill in the form and get instant quotation for your website</marquee>
	<div class="container-contact100">
		<div class="wrap-contact100">
			<form class="contact100-form validate-form" id="quotation_form" action="insert.php" method ="post">
	
				<span class="contact100-form-title">
				<img src="images\logo2.jpg" alt="" align="center" width= "100px " height= "100px" />
           		</span>
				<span class="contact100-form-title">
					Send Us Your Information
				</span>
				
				<label class="label-input100" for="name">Tell us your name *</label>
				<span class="error_form" id="name_error_message">error</span>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input class="input100 name" type="text" name="name" placeholder="Enter your name" >
					<span class="focus-input100"></span>
				</div>
				
				<label class="label-input100" for="email">Enter your email</label>				
				<div class="wrap-input100 " >
					<input id="email" class="input100" type="text" name="email" placeholder="Eg. example@email.com">
					<span class="focus-input100"></span>
				</div>
				<label class="label-input100 " for="phone">Enter phone number*</label>
				<span class="error_form" id="phone_error_message">error</span>
				<div class="wrap-input100 validate-input" data-validate = "Valid Phone number required">
					<input id="phone" class="input100 phone" type="tel" name="phone" placeholder="00000 00000">
					<span class="focus-input100"></span>
				</div>
                <label class="label-input100 websitetype" for="Website Type">Website Type*</label>
                <div class="wrap-input100">
               <div class="wrap-contact3-form-radio"><br>
						<div class="contact3-form-radio m-r-42"><br>
							<input class="input-radio3" id="radio1" type="radio" name="Websitetype" value="Basic" checked="checked">
							<label class="label-radio3" for="radio1">
								Basic
							</label>
						</div>
						<div class="contact3-form-radio"><br>
							<input class="input-radio3" id="radio2" type="radio" name="Websitetype" value="Advanced">
							<label class="label-radio3" for="radio2">
								Advanced
							</label>
						</div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
						<div class="contact3-form-radio"><br>
							<input class="input-radio3" id="radio3" type="radio" name="Websitetype" value="E-Commerce">
							<label class="label-radio3" for="radio3">
								E-Commerce
							</label>
						</div>
						<span class="focus-input100"></span>
				</div>
			</div>
					<label class="label-input100" for="WebpageRequired">Webpages Required*</label>
				<div class="wrap-input100">
					<input id="WebpageRequired" class="input100"  type="number" name="WebpageRequired" id="WebpageRequired"
                min="1" max="120" step="1" value="1" >
					<span class="focus-input100"></span>
				</div>
                <label class="label-input100" for="Contentwriting">Content Writing*</label>
                 <div class="wrap-input100 input100-select">
					
					<div>
						<select class="selection-2 Contentwriting" name="Contentwriting">
							<option value = "required">Required</option>
							<option value = "not required">Not required</option>
							
							
						</select>
					</div>
                  <span class="focus-input100"></span>	
				</div>
				 <label class="label-input100" for="HostingServices">Hosting Services*</label>
                 <div class="wrap-input100 input100-select">
					
					<div>
						<select class="selection-2 HostingServices" name="HostingServices">
							<option value = "required">Required</option>
							<option value = "not required">Not required</option>
							
							
						</select>
					</div>
					<span class="focus-input100"></span>	
				</div>
					<label class="label-input100" for="LogoDesign">Logo Design*</label>
                 <div class="wrap-input100 input100-select">
					
					<div>
						<select class="selection-2 LogoDesign" name="LogoDesign">
							<option value = "required">Required</option>
							<option value = "not required">Not Required</option>
							
							
						</select>
					</div>
                  <span class="focus-input100"></span>	
				</div>
                 <label class="label-input100" for="WebsiteRequiredin">Website Required in*</label>
                 <div class="wrap-input100 input100-select">	
					<div>
						<select class="selection-2 WebsiteRequiredin" name="WebsiteRequiredin">
							<option value = "10-15days">10-15 Days</option>
							<option value = "16-20days">16-20 Days</option>
						</select>
					</div>
                  <span class="focus-input100"></span>	
				</div>
				
				<div class="container-contact100-form-btn">
					<div class="btn btn-success">
					  <input class="btn btn-success" id="submit" name="submit" type ="submit" value="submit">	
				    </div>	
				</div>
			
			</form>
			<div class="contact100-more flex-col-c-m" style="background-image: url('images/bg-01.jpg');">
				<div class="flex-w size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-map-marker"></span>
					</div>
					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							Address
						</span>
						<span class="txt3">
							 Madurai , TN -IN
                                Anuppandi, Theppakulam Road
						</span>
					</div>
				</div>
				<div class="dis-flex size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-phone-handset"></span>
					</div>
					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							Lets Talk
						</span>
						<span class="txt3">
							 0452 2312437 | +91-7339129812
                                Mon-Fri 9am-6pm
						</span>
					</div>
				</div>
				<div class="dis-flex size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-envelope"></span>
					</div>
					<div class="flex-col size2">
						<span class="txt1 p-b-20">
							General Support
						</span>
						<span class="txt3">
							info@v7lancers.com
						</span>
						<span class="txt3">
							www.v7lanncers.com
							</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="dropDownSelect1"></div>
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
	<script>
		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'UA-23581568-13');
	</script>
  
	
   
</body>
</html>

   
   
