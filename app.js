const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

 
 
function  page2Animation(){
    var elemC = document.querySelector("#elem-container")
    var fix = document.querySelector('#fixed-image')
    
    elemC.addEventListener("mouseenter",function(){
             fix.style.display = "block"
    })
    
    elemC.addEventListener("mouseleave",function(){
        fix.style.display = "none"
    })
    
     
    var elems  = document.querySelectorAll(".elem");
    
        elems.forEach(function(e){
            e.addEventListener("mouseenter", function(){
                var image = e.getAttribute("data-image");
                fix.style.backgroundImage = `url(${image})`;
            })
        })
     
} 

    function swiperAnimation(){
        
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        
      });
  
    } 

    function menuAnimation(){
        
        var menu =  document.querySelector("nav h3");
        var full =  document.querySelector("#full-scr");
        var navImg = document.querySelector("nav img");
      var flag ;
      var text = document.querySelector("#resp-text");
          menu.addEventListener("click",function(){
              if(flag == 0){
                  
                  full.style.top = 0 ;
                  navImg.style.opacity = 0;
                  flag = 1;
              }
              else{ 
               
                  full.style.top = '-100% ';
                  navImg.style.opacity = 1;
                  flag = 0;
              }
              
    

          })
      
         }
       
   function menuAnimation(){
        
            var menu =  document.querySelector("nav h3");
            var full =  document.querySelector("#full-scr");
            var navImg = document.querySelector("nav img");
            var navH2  = document.querySelector("#resp-text");
          var flag ;
              menu.addEventListener("click",function(){
                  if(flag == 0){
                      
                      full.style.top = 0 ;
                      navImg.style.opacity = 0;
                      navH2.style.display = "block"  

                      flag = 1;



                  }
                  else{ 
                   
                      full.style.top = '-100% ';
                      navImg.style.opacity = 1;
                      navH2.style.display = "none"
                      flag = 0;
                  }
          
              })
          
             } 

function loaderAnimation(){

    var loader =  document.querySelector("#loader")
    setTimeout(function(){
       loader.style.top = '-100%';
    },4000)
} 
 

swiperAnimation();

 page2Animation();

 menuAnimation();

 loaderAnimation() ;