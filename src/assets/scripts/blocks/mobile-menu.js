window.app.mobileMenu = () => {

    // Open menu burger
    const menuLinks = document.querySelectorAll('.js-mobile-menu');
    const menuLists = document.querySelectorAll('.js-menu-list');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('.body');

    const openMenuList = function (linkId, linkName){
        menuLists?.forEach((list) =>{
            const listId = list.dataset.categoryMenu;
            if(linkId == listId){
                list.classList.add('open');
                const ListTitle = list.querySelector('.header__menu-mobile-title');
                ListTitle.innerHTML = linkName;

                const btnPrev = list.querySelector('.js-catalog-prev');
                btnPrev?.addEventListener('click', ()=>{
                    list.classList.remove('open');
                })

                const btnClosedMenu = list.querySelector('.cross');
                btnClosedMenu?.addEventListener('click', ()=>{
                    menuLists.forEach((list) =>{
                        list.classList.remove('open');
                    })
                    burger.classList.remove('open');
                    menu.classList.remove('open');
                    body.classList.remove('overflow');
                })
            } else{
                if(window.innerWidth > 1199){
                    list.classList.remove('open');
                }
            }
        })
    }

    menuLinks?.forEach((link) =>{
        link.addEventListener('click', ()=>{
            const linkId = link.dataset.categoryMenu;
            const linkName = link.innerHTML;
            openMenuList(linkId, linkName);
        })
    })

};

window.app.mobileMenu();