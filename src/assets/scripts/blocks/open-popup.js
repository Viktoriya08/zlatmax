



window.app.initOpenPopup = () => {

    // Open Popup

    const openPopup = (popupName) => {
        const popups = document.querySelectorAll('.js-popup');
        if(!popups) return;
        popups.forEach((popup) => {
            if (popup.dataset.popupName == popupName) {
                popup.classList.add('body__popup--active');
            } else {
                popup.classList.remove('body__popup--active');
            }
        });
    }

    const buttons = document.querySelectorAll('.js-open-popup');
    if(!buttons) return;

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            openPopup(button.dataset.popupName);
        });
    });

};

window.app.initOpenPopup();

window.app.initClosePopup = () => {

    const buttons = document.querySelectorAll('.js-popup__button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            button.closest('.js-popup').classList.remove('body__popup--active');
        });
    });

};

window.app.initClosePopup();