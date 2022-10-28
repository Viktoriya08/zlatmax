
window.app.initAirDatepick = () => {

    const calendarInputs = document.querySelectorAll('.calendar__input');

    if(!calendarInputs) return;

    calendarInputs.forEach((calendarInput) =>{
        new AirDatepicker(calendarInput, {
            navTitles: {
                days: '<i>MMMM</i>'  
            },
            locale: {
                days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
                daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                today: 'Сегодня',
                clear: 'Очистить',
                dateFormat: 'dd/MM/yyyy',
                timeFormat: 'HH:mm',
                firstDay: 1
            },
            selectedDates: [new Date()],
            autoClose: true,
            container: '.calendar__air-datepicker',
            /* inline: true, */
        });

        calendarInput.onfocus = ()=>{
            calendarInput.closest(".calendar").classList.add('open');
        }

        calendarInput.onblur = ()=>{
            calendarInput.closest(".calendar").classList.remove('open');
        }

    })

};

window.app.initAirDatepick();
