document.addEventListener("DOMContentLoaded", () => {

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
    });

    //клик по инпуту в хедере

    const headerLabel = document.querySelector('.header__search');
    headerLabel.onclick = ()=>{
        headerLabel.classList.add('active')
    }

    document.onclick = function (e) {
        const target = e.target
        if (!target.closest('.header__search') && !target.closest('.header__search')) {
           headerLabel.classList.remove('active')

        };
    };

    const headerButtons = document.querySelectorAll('.header__list__item')
    headerButtons.forEach((el)=>{
        el.onclick = ()=>{
            headerButtons.forEach((el)=>{
                el.classList.remove('active')
            })
            el.classList.add('active')
        }
    })

    const headerMenu = document.querySelectorAll('.menu-button')
    headerMenu.forEach((el)=>{
        el.onclick = ()=>{
            el.classList.toggle('active')
        }
    })

    //активация чекбокса блоке

    const topCheckbox = document.getElementById('top-form-checkbox');
    const visualTopChecbox = document.querySelector('.top-form-checkbox-visual')
    function isCheckboxChecked (checkbox, visualLabel){
        checkbox.onchange = ()=>{
            if(checkbox.checked){
                visualLabel.classList.add('active')
                console.log('checked')
            } else {
                visualLabel.classList.remove('active')
                console.log('unchecked')
            }

        }
    }

    isCheckboxChecked(topCheckbox, visualTopChecbox)

    //открытие доп инфы в блоке "о нас"

    const moreInfoBtn = document.querySelector('.about-more-info');
    const aboutMoreInfoText = document.querySelectorAll('.about-block__right__text')
    const textChange = document.querySelector('.about-more-info-text')

    // moreInfoBtn.onclick = ()=>{
    //     if(moreInfoBtn.classList.contains('open')) {
    //         moreInfoBtn.classList.add('close')
    //         moreInfoBtn.classList.remove('open')
    //         textChange.innerHTML = 'Скрыть'
    //         aboutMoreInfoText.forEach(el=>{
    //             el.classList.add('active')
    //         })
    //     } else if(moreInfoBtn.classList.contains('close')) {
    //         moreInfoBtn.classList.remove('close')
    //         moreInfoBtn.classList.add('open')
    //         textChange.innerHTML = 'Подробнее'
    //         aboutMoreInfoText.forEach(el=>{
    //             el.classList.remove('active')
    //         })
    //         aboutMoreInfoText[0].classList.add('active')
    //     }
    // }

    moreInfoBtn.addEventListener('click', openMoreInfo(moreInfoBtn, textChange, aboutMoreInfoText, 'Подробнее', 'Скрыть'))

    function openMoreInfo (button, buttonText, element, textOpen, textClose){
        console.log(12)

        button.onclick = ()=>{
            if(button.classList.contains('open')) {
                button.classList.add('close')
                button.classList.remove('open')
                buttonText.innerHTML = textClose
                element.forEach(el=>{
                    el.classList.add('active')
                })
            } else if(button.classList.contains('close')) {
                button.classList.remove('close')
                button.classList.add('open')
                buttonText.innerHTML = textOpen
                element.forEach(el=>{
                    el.classList.remove('active')
                })
                element[0].classList.add('active')
            }
            console.log(12)

        }


    }

    //слайдер отзывов

    const rewSlider = new Swiper('.rew-slider', {
        speed: 400,
        spaceBetween: 20,
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next-rew',
          prevEl: '.swiper-button-prev-rew',
        },
    });


    const teamSlider = new Swiper('.team-slider', {
        speed: 400,
        navigation: {
          nextEl: '.swiper-button-next-team',
          prevEl: '.swiper-button-prev-team',
        },
    });



    //открытие подробнее отзывов

    let rewButtonMore = document.querySelectorAll('.rew-slide__btm__button')


    rewButtonMore.forEach(el=>{
        el.onclick = ()=>{
            console.log(12)
            if(el.classList.contains('more')){
                el.innerHTML = 'скрыть'
                el.classList.remove('more')
                el.classList.add('close')
                el.previousElementSibling.classList.add('active')
            } else if (el.classList.contains('close')) {
                el.innerHTML = 'Подробнее'
                el.classList.add('more')
                el.classList.remove('close')
                el.previousElementSibling.classList.remove('active')

            }
        }
    })

    //открытие и закрытие вопросов

    let question = document.querySelectorAll('.question-item')

    question.forEach(el=>{
        el.onclick = ()=>{
            el.classList.toggle('active')
        }
    })

    //показ следующих вопросов

    const moreQuestBtn = document.querySelector('.morequestions');
    let indexQuestion = 7;

    function moreQuest (){

        for(let i =  0; i < indexQuestion; i++) {
            question[i].classList.remove('invise')
        }

    }

    moreQuest()

    moreQuestBtn.onclick = ()=>{
        indexQuestion = indexQuestion + 5;
        moreQuest();
    }


})
