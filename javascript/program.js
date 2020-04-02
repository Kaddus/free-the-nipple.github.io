 /* $(document).ready(onDocumentReady);
                
   function onDocumentReady() {
    jQuery(".franzrevolution").click(showpopup);
}               
                    
function showpopup(event)
                    {jQuery("franzrevpopup").addClass("show");
                    jQuery("franzrevpopup").removeClass("hide")}
                    
                    */


$(document).ready(function () {
    $(".franzrevolution").click(function(){
       
        $(".popup").hide();
       $('.franzrevolution_popup').show();
    });
    
    
    
        $(".ww2").click(function(){
       
        $(".popup").hide();
       $('.ww2_popup').show();
    });

    
    
      $(".jhdt").click(function(){
       
        $(".popup").hide();
       $('.jhdt_popup').show();
    });

    
    
    
       $(".japan_rund").click(function(){
       
        $(".popup").hide();
       $('.japan_popup').show();
    });

    

         $(".mali_rund").click(function(){
       
        $(".popup").hide();
       $('.mali_popup').show();
    });
 
    
    
       $(".affe").click(function(){
       
        $(".popup").hide();
       $('.wisstheo_popup').show();
    });
    
    
        
       $(".hilfe").click(function(){
       
        $(".popup").hide();
       $('.popup_hilfe').show();
    });
    
    
    
 
      $(".facebook").click(function(){
       
        $(".popup").hide();
       $('.facebook_popup').show();
    });
  
    
    
    
    
        $(".instagram").click(function(){
       
        $(".popup").hide();
       $('.instagram_popup').show();
    });
  
 
    

    $('.close').click(function(){
        
        $(".popup").hide();
    });
    
});
