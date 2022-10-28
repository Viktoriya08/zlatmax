window.app.openChoise = () => {

    // Open Choise

    const openChoise = (button, box, choiseBtns) => {
        const choiseBoxs = document.querySelectorAll('.js-choise-box');
        const choiseBoxClickHandler = (e)=>{
                e.stopPropagation();
                if(e.target.textContent == "Показать все"){
                    button.textContent = 'Выбрать рубрику';
                } else{
                    button.textContent = e.target.textContent;
                }
            }
            
        if(!choiseBoxs) return;

        choiseBtns.forEach((btn) =>{
            btn.classList.remove('open');
        })

        choiseBoxs.forEach((choiseBox) => {

            if (choiseBox.dataset.choiseBtn == box && !choiseBox.classList.contains('open')) {
                choiseBox.classList.add('open');
                button.classList.add('open');

                if(choiseBox.classList.contains('js-choise-box--name')){
                    choiseBox.addEventListener('click', choiseBoxClickHandler);
                }
                
            } else {
                choiseBox.classList.remove('open');
                choiseBox.removeEventListener('click', choiseBoxClickHandler);
            }
        });
    }

    const choiseBtns = document.querySelectorAll('.js-choise-btn');
    
    if(!choiseBtns) return;

    choiseBtns.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            openChoise(button, button.dataset.choiseBtn, choiseBtns);
        });
    });

    const choiseBoxs = document.querySelectorAll('.js-choise-box');

    document.addEventListener('click',(event)=>{
        choiseBtns.forEach((btn) =>{
            btn.classList.remove('open');
        });
        choiseBoxs.forEach((choiseBox) => {
            choiseBox.classList.remove('open');
        });
    })

};



window.app.openChoise();
