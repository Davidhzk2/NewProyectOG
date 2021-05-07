var swiper = new Swiper('.swiper-container', {
  
    //Infinito
    loop: true,
    // Empezar a pasar automaticamente y cambiar cada segundos 
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    //Indicadores
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"> </span>';
      }
    },
    //flechas
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });