var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mySwiper1", {
    spaceBetween:30,
    watchSlidesProgress: true,
    slidesPerView: 3,
  });
  
  gsap.to("#nav",{
    backgroundColor:"black",
 
    scrollTrigger:{
 triger:"#nav",
 scroller:"body",
 markers:true,
 start:"top -10%",
 start:"top -11%",
 scrub:true
    }
    
  }

  )