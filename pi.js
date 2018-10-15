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
    			nav:false,
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
            if ($(document).scrollTop() > 50){
                $('.header .navbar').addClass("affix");
            }
            else{
                $('.header .navbar').removeClass("affix");
            };
             $(document).on('click','a[href="#jump"]',function(e){
                if(this.hash!==''){
                e.preventDefault();
                var hash=this.hash;
            $('html','body').animate({scrollTop:0},1000,function(){
                window.location.hash=hash;
            });
        }//end if
            });
        });
        
        });
           
