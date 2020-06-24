
$(document).ready(function(){
    $("#name_error_message").hide();
    $("#phone_error_message").hide();


     error_name=false;
     error_phone=false;

    $(".name").focusout(function(){
        check_Name();
    });
    $(".phone").focusout(function(){
        check_phone();
    });

function check_Name(){
     pattern= /^[a-zA-Z]*$/;
     name=$(".name").val();
    console.log(name);
    if(pattern.test(name)&&name!=''){
        $("#name_error_message").hide();
        $(".name").css("border-bottom","2px solid #05f244");

    }
    else{
        $("#name_error_message").html("<b>should contain only characters</b>");
        $("#name_error_message").show();
        $(".name").css("border-bottom","2px solid #F90A0A");
        error_name=true;
    }
}
function check_phone(){
     pattern= /^[6-9]\d{9}$/;
     phone=$(".phone").val();
    console.log(phone);
    
    if(pattern.test(phone)&&phone!='' &&phone.length==10){
        $("#phone_error_message").hide();
        $(".phone").css("border-bottom","2px solid #05f244");

        
    }
    else{
        $("#phone_error_message").html("<b>Enter valid Mobile Number</b>");
        $("#phone_error_message").show();
        $(".phone").css("border-bottom","2px solid #F90A0A");
        error_phone=true;
    }
    
}
$("#quotation_form").on('submit',function(){
     error_name=false;
     error_phone=false;		

   check_Name();
   
   check_phone();
   Websitetype=$("input[name='Websitetype']:checked").val();
   console.log(Websitetype);
   
   Contentwriting=$("select.Contentwriting").children("option:selected").val();
   console.log(Contentwriting);
    
   HostingServices=$("select.HostingServices").children("option:selected").val();
   console.log(HostingServices);

   WebsiteRequiredin=$("select.WebsiteRequiredin").children("option:selected").val();
   console.log(WebsiteRequiredin);

   LogoDesign=$("select.LogoDesign").children("option:selected").val();
   console.log(LogoDesign);

   WebpageRequired=$("input[name='WebpageRequired']").val();
   console.log(WebpageRequired);

   if(error_name===false && error_phone===false){
    msgbox(Websitetype,Contentwriting,HostingServices,WebsiteRequiredin,LogoDesign,WebpageRequired);
   
       return true;
   }
   else{
       return false;
   }
});
         function msgbox(Websitetype,Contentwriting,HostingServices,WebsiteRequiredin,LogoDesign,WebpageRequired){
         

        if(Websitetype=='Basic'){
            if((Contentwriting=='not required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<=7)){
                      $(function(){
                      
                         alert("Your requirements has been analysed and the pricing for your website is 3999/- Our experts will connect you soon.", "For futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
                }
          
           else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                     $(function(){
                         alert("Your requirements has been analysed and the pricing for your website is 4499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                     });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                 
                   $(function(){
                    alert("Your requirements has been analysed and the pricing for your website is 4999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");

                   });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }

             else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                   $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
             }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                     $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 4999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                   $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                       $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                       $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                         $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            } 
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                  
                      $(function(){
                         alert("Your requirements has been analysed and the pricing for your website is 6799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                      });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                     $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 7299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                     $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 4799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                     $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                 $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                     $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                        $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 5799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                       $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                         $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 6299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else {
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 7299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
        }
     else if(Websitetype=='Advanced'){
            if((Contentwriting=='not required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<=7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 7999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            
           else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 8499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                        $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 8999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                          $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
             else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                     $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                         $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 8499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10,499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                        $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                        $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                       $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                        $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                        $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                       $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                          $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 11,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                            $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 8799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                        $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
                
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                   $(function(){
                      alert();
                    }); $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
                
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
                
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                   $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 9799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                   $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 10,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else {
                          $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 11,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
        }
         else{
            if((Contentwriting=='not required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<=7)){
                    $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 14,999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            
           else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                         $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 15,499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                            $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 15,999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                   $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
             else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                             $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                                   $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                         $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,999/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='not required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                             $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,499/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                            $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                            $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                              $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                                  $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                            $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                          $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                               $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 18,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                             $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 15,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired<7)){
                             $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                           $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='not required')&&(WebpageRequired>7)){
                           $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                                 $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired<7)){
                          $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                          $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 16,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='not required')&&(HostingServices=='required')&&(WebsiteRequiredin=='10-15days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                      $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,799/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else if((Contentwriting=='required')&&(HostingServices=='required')&&(WebsiteRequiredin=='16-20days')&&(LogoDesign=='required')&&(WebpageRequired>7)){
                              $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 17,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
            else {
                             $(function(){
                      alert("Your requirements has been analysed and the pricing for your website is 18,299/- Our experts will connect you soon.\nFor futher clarification and negotiation feel free to call us on +91-7339129812.Email-info@v7lancers.com");
                    });
            }
        }
}
        

});

 
