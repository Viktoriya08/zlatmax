window.app.openBurger = () => {

    // Open menu burger
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('.body');
    const btnClosedMenu = menu.querySelector('.cross');


    burger?.addEventListener('click', ()=>{
        burger.classList.toggle('open');
        menu.classList.toggle('open');
        body.classList.toggle('overflow');
    })

    btnClosedMenu?.addEventListener('click', ()=>{
        burger.classList.remove('open');
        menu.classList.remove('open');
        body.classList.remove('overflow');
    })

};

window.app.openBurger();