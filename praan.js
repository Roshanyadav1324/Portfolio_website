const element = document.getElementsByClassName('progress-done');
//console.log(element);
for(var x=0; x<element.length; x++)
{
    element[x].style.width = element[x].getAttribute('data-progress') + '%';
    console.log(element[x].getAttribute('data-progress') + '%');
    element[x].style.opacity = 1;
}


var mySwiper = new Swiper(".swiper-container", {
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    }
  });