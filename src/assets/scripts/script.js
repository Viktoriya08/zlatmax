// script.js

// Script

document.addEventListener("DOMContentLoaded", () => {

    window.app = {};

    // Plugins

    @@include('./plugins/air-datepicker.js');
    @@include('./plugins/swiper.js');
    @@include('./plugins/simplebar.js');

    // Blocks

    @@include('./blocks/open-popup.js');
    @@include('./blocks/calendar.js');
    @@include('./blocks/choise.js');
    @@include('./blocks/news.js');
    @@include('./blocks/burger.js');
    @@include('./blocks/news-slider.js');
    @@include('./blocks/news-backend.js');
    @@include('./blocks/riple.js');

    @@include('./blocks/mobile-menu.js');

});
