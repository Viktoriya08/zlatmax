window.app.initNewsSlider = () => {

  const swiper = new Swiper('.news-slider__swiper', {
      pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 3,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      
        navigation: {
          nextEl: '.news-slider__prev',
          prevEl: '.news-slider__next',
        },
  });

  /* const newSlider = document.querySelector('.news-slider');
  const newsElemets = newSlider.querySelectorAll('.swiper-slide');
  const swiperPagination = newSlider.querySelector('.swiper-pagination');

  if(newsElemets.length > 5){
    swiperPagination.classList.add('js-custom-pagination')
  } */


};

window.app.initNewsSlider();