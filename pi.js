$(document).ready(function(){
  			$("#owl1").owlCarousel({
  			loop:true,
    			margin:10,
    			nav:true,
    			autoplay:true,
    			autoplay:400,
    			animateOut: 'slideOutRight',
    			animateIn: 'slideInY',
			responsive:{
        		0:{
            		items:1
        			},
        		600:{
            		items:1
        			},
       		    1000:{
            		items:1
        			}
    			}
		});
				
		$("#owl2").owlCarousel({
  			loop:true,
  			margin:10,
    			nav:true,
    			autoplay:true,
    			autoplay:100,
				responsive:{
        		0:{
            		items:1
        			},
        		600:{
            		items:1
        			},
       		    1000:{
            		items:3
        			}
    			}
		})
	$("#owl3").owlCarousel({
  			loop:true,
  			margin:10,
    			nav:true,
    			autoplay:true,
    			autoplay:100,
				responsive:{
        		0:{
            		items:1
        			},
        		600:{
            		items:1
        			},
       		    1000:{
            		items:3
        			}
    			}
		})
        $(window).scroll(function(){ 
            if ($(document).scrollTop() > 50 ){
                $('.header .row').addClass("affix");
            }
            else{
                $('.header .row').removeClass("affix");
            }

            });
        });
        
        });
           
