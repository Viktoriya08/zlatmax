window.app.choiseNews = () => {

    // news
    /* const newsCards = document.querySelectorAll('.js-news-card');
    const newsCategories = document.querySelectorAll('.js-news-category');

    newsCategories?.forEach((category) =>{
        category.addEventListener('click', (e)=>{
            e.preventDefault();
            filterNews(e.target.dataset.categoryNews)

        })
    })

    const filterNews = (caregory) =>{

        if(!newsCards) return;

        newsCards.forEach((news) =>{
            news.closest('.net__el').classList.remove('fadeInUp');
            news.closest('.net__el').classList.add('fadeInUp');
            if(news.dataset.categoryNews == caregory){
                news.closest('.net__el').style.display = 'block';
            } else if (caregory == 'null'){
                news.closest('.net__el').style.display = 'block';
            } else {
                news.closest('.net__el').style.display = 'none';
            }
        })
    } */

    const newsBackend = [{
        img: '/assets/images/i-1.jpg',
        desc: 'Благодаря поддержке предпринимателей. Златоустовские поликлиники оснастили холодильными установками для хранения вакцины',
        date: '02/02/2021',
        categories: [1, 2],
        categoriesName: ['Медицина', 'Общество'],

    },
    {
        img: '/assets/images/i-2.jpg',
        desc: 'Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции. Роддом Златоуста вновь откроет свои двери 8 февраля',
        date: '29/01/2021',
        categories: [1],
        categoriesName: ['Медицина'],

    },
    {
        img: '/assets/images/i-3.jpg',
        desc: 'Осторожно, сосульки! Оттепель на этой неделе привела к тому, что на крышах многих домов образовались опасные ледяные наросты',
        date: '29/01/2021',
        categories: [3],
        categoriesName: ['Коммуналка'],

    },
    {
        img: '/assets/images/i-4.jpg',
        desc: 'В четыре раза меньше вопросов, чем обычно. В Златоусте прошло первое в 2021-м году Собрание депутатов',
        date: '29/01/2021',
        categories: [4],
        categoriesName: ['Политика'],

    },
    {
        img: '/assets/images/i-5.jpg',
        desc: 'В Златоусте сотрудники теротдела проверят магазин, из которого выбрасывали строительный мусор на контейнерную площадку',
        date: '29/01/2021',
        categories: [3],
        categoriesName: ['Коммуналка'],

    },
    {
        img: '/assets/images/i-6.jpg',
        desc: 'ДЧ: Первое Собрание депутатов 2021 года: планируется работа на весь год',
        date: '29/01/2021',
        categories: [2],
        categoriesName: ['Общество'],

    }];

    

    const newsCategories = document.querySelector('.js-news-category');

    newsCategories?.addEventListener('click', (event)=>{
        const selectedCategoty =  event.target.dataset.categoryNews;
        const currentNewsList = selectedCategoty ? newsBackend.filter(
            (news)=>{
                return news.categories.some(
                    (el)=>{
                        return el == selectedCategoty;
                    }
                )
            }
        ) : newsBackend;
        appendNewsList(currentNewsList)
    })

    const appendNewsList = (list)=>{
        const newsContainer = document.querySelector('#news');

        newsContainer.innerHTML = '';
    
        list.forEach((news) =>{

            if ('content' in document.createElement('template')) {
                
                const newsTemplate = document.querySelector('#news-template');
    
                const clone = newsTemplate.content.cloneNode(true);
                const img = clone.querySelector('.card__img img');
                const categories = clone.querySelector('.card__cat');
                const date = clone.querySelector('.card__date');
                const text = clone.querySelector('.card__text');
                
                img.setAttribute('src', news.img);
                text.innerHTML = news.desc;
                date.innerHTML = news.date;
                news.categoriesName.forEach((category)=>{
                    const spanElement = document.createElement('span');
                    spanElement.innerHTML = category;
                    categories.appendChild(spanElement);
                })
    
                newsContainer.appendChild(clone);
            }
        })
    }

    appendNewsList(newsBackend);

};

window.app.choiseNews();