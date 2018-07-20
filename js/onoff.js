$(function(){
   
   
    $("#on").click(function(){
     var  imgname="images/on.jpg"
     $("img").attr("src",imgname); 
    });
                     
       $("#off").click(function(){
        var imgname="images/off.jpg"              
        $("img").attr("src",imgname);
    });

/*show hide example*/
$("#btnhide").click(function(){
    $("#randomtext").hide(500);
});

$("#btnshow").click(function(){
    $("#randomtext").show(500);
    
});
    $("#btntoggle").click(function(){
    $("#randomtext").toggle(500);
    });
    /* End of show hide example*/
    
    /*fade in out logic*/
    $("#btnfadeout").click(function(){
    $("#box").fadeOut(500);
    });
    $("#btnfadein").click(function(){
    $("#box").fadeIn(500);
        
    });
     $("#btnfadetoggle").click(function(){
    $("#box").fadeToggle(500);
         
         });
          /* End of fade in out logic*/

});

