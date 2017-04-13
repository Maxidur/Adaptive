$(document).ready(function() { 
            var windowWidth = $(window).width();
            if(windowWidth > 480)$(".wraper_vip-tumb").addClass("col-xs-6");
            else $(".wraper_vip-tumb").removeClass("col-xs-6");
            
            $(window).resize(function(){
                var windowWidth = $(window).width();
                if(windowWidth > 480)$(".wraper_vip-tumb").addClass("col-xs-6");
                else $(".wraper_vip-tumb").removeClass("col-xs-6");
            });
        });

$(document).ready(function() { 
            var windowWidth = $(window).width();
            if(windowWidth > 480)$(".wrap-info").addClass("col-xs-6");
            else $(".wrap-info").removeClass("col-xs-6");
            
            $(window).resize(function(){
            	var windowWidth = $(window).width();
            	if(windowWidth > 480)$(".wrap-info").addClass("col-xs-6");
            	else $(".wrap-info").removeClass("col-xs-6");               
            });
        });

$(document).ready(function() { 
            var windowWidth = $(window).width();
            if(windowWidth > 480)$(".wrap-catalog").addClass("col-xs-6");
            else $(".wrap-catalog").removeClass("col-xs-6");
            
            $(window).resize(function(){
            	var windowWidth = $(window).width();
            	if(windowWidth > 480)$(".wrap-catalog").addClass("col-xs-6");
            	else $(".wrap-catalog").removeClass("col-xs-6");               
            });
        });