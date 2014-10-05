$(document).ready(function() {
       
 $(".redbutton").click(function(){  
     $(".red").toggleClass( "active", 1000);
  });         
              
  $("li.beach").click(function(){  
  	 $(this).css("color", "blue");
     $(".blue").addClass( "active1", 1000);
     $("li.bbq, li.hWarming, li.baseball, li.hackeryou, li.superbowl").css( "color", "white");
       $("span.wisam, span.logan, span.jana, span.drew, span.mac, span.jen").removeClass( "active");
     $("span.wisam, span.mac, span.drew, span.jen").addClass( "active");
     $("li.baseball, li.bbq, li.hWarming, li.hackeryou, li.superbowl").css("opacity", "0.3");
     $("li.baseball, li.bbq, li.hWarming, li.hackeryou, li.superbowl").hover(function(){
     	$(this).css("opacity", "1");
     	// $(this).mouseout(function(){
     	// 	$(this).css("opacity", "0.3");
  	   //      $("li.beach").css("opacity", "1");
     	// });
     });
  });

  $("li.bbq").click(function(){  
  	 $(this).css("color", "blue");
     $(".blue").addClass( "active1", 1000);
     $("li.beach, li.hWarming, li.baseball, li.hackeryou, li.superbowl").css( "color", "white");
     $("span.wisam, span.logan, span.jana, span.drew, span.mac, span.jen").removeClass( "active");
     $("span.wisam, span.logan, span.jana, span.jen").addClass( "active");
      $("li.beach, li.baseball, li.hWarming, li.hackeryou, li.superbowl").css("opacity", "0.3");
     $("li.beach, li.baseball, li.hWarming, li.hackeryou, li.superbowl").mouseover(function(){
     	$(this).css("opacity", "1");
     	// $(this).mouseout(function(){
     	// 	$(this).css("opacity", "0.3");
     	// 	$("li.bbq").css("opacity", "1");
     	// });
     });
  });

  $("li.hWarming").click(function(){  
  	 $(this).css("color", "blue");
     $(".blue").addClass( "active1", 1000);
     $("li.beach, li.bbq, li.baseball, li.hackeryou, li.superbowl").css( "color", "white");
     $("span.wisam, span.logan, span.jana, span.drew, span.mac, span.jen").removeClass( "active");
     $("span.wisam, span.logan, span.drew").addClass( "active");
     $("li.beach, li.bbq, li.baseball, li.hackeryou, li.superbowl").css("opacity", "0.3");
     $("li.beach, li.bbq, li.baseball, li.hackeryou, li.superbowl").mouseover(function(){
     	$(this).css("opacity", "1");
     	// $(this).mouseout(function(){
     	// 	$(this).css("opacity", "0.3");
     	// 	$("li.hWarning").css("opacity", "1");
     	// });
     });
  });

  $("li.baseball").click(function(){  
  	 $(this).css("color", "blue");
     $(".blue").addClass( "active1", 1000);
     $("li.beach, li.hWarming, li.bbq, li.hackeryou, li.superbowl").css( "color", "white");
     $("span.wisam, span.logan, span.jana, span.drew, span.mac, span.jen").removeClass( "active");
     $("span.wisam, span.logan").addClass( "active");
     $("li.beach, li.bbq, li.hWarming, li.hackeryou, li.superbowl").css("opacity", "0.3");
     $("li.beach, li.bbq, li.hWarming, li.hackeryou, li.superbowl").mouseover(function(){
     	$(this).css("opacity", "1");
     	// $(this).mouseout(function(){
     	// 	$(this).css("opacity", "0.3");
     	// 	$("li.baseball").css("opacity", "1");
     	// });
     });
  });

  $("li.hackeryou").click(function(){  
      $(this).css("color", "blue");
     $(".blue").addClass( "active1", 1000);
     $("li.beach, li.hWarming, li.baseball, li.bbq, li.superbowl").css( "color", "white");
     $("span.wisam, span.logan, span.jana, span.drew, span.mac, span.jen").removeClass( "active");
     $("span.logan, span.jana, span.drew, span.mac, span.jen").addClass( "active");
     $("li.beach, li.bbq, li.hWarming, li.baseball, li.superbowl").css("opacity", "0.3");
     $("li.beach, li.bbq, li.hWarming, li.baseball, li.superbowl").mouseover(function(){
     	$(this).css("opacity", "1");
     	// $(this).mouseout(function(){
     	// 	$(this).css("opacity", "0.3");
     	// 	$("li.hackeryou").css("opacity", "1");
     	// });
     });
  });

  $("li.superbowl").click(function(){  
  	  $(this).css("color", "blue");
  	  $("li.beach, li.hWarming, li.baseball, li.hackeryou, li.bbq").css( "color", "white");
     $(".blue").addClass( "active1", 1000);
     $("span.wisam, span.logan, span.jana, span.drew, span.mac, span.jen").removeClass( "active");
     $("span.logan, span.wisam, span.drew, span.mac").addClass( "active");
     $("li.beach, li.bbq, li.hWarming, li.baseball, li.hackeryou").css("opacity", "0.3");
     $("li.beach, li.bbq, li.hWarming, li.baseball, li.hackeryou").mouseover(function(){
     	$(this).css("opacity", "1");
     	// $(this).mouseout(function(){
     	// 	$(this).css("opacity", "0.3");
     	// 	$("li.superbowl").css("opacity", "1");
     	// });
     });
  });


}); //document ready

$(window).load(function() { 
	
});