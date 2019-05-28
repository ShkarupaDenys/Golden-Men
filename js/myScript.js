
// --------------------   service   --------------------

let service = document.querySelectorAll('.service'),
    hamburgerMenu = document.querySelector('.hamburger-menu'),
    menu = document.querySelector('.nav-mobile');



function openService(a){
        a.forEach( elem => {
            elem.addEventListener('click', e => {
                elem.classList.toggle('service_active');
            })
        })
}

if ( document.body.clientWidth <= 991 ) {
    openService(service);
} else {
    null;
}





hamburgerMenu.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle('hamburger-menu_active');
    menu.classList.toggle('nav-mobile_active');
})



// --------------------   accordion   --------------------


let accordion = document.querySelectorAll('.accordion');

let openAccordion = (e) => {
    if (e.currentTarget.classList.contains('active')) {
        e.currentTarget.classList.remove('active');
    } else {
        Array.prototype.forEach.call(accordion, (e) => {
            e.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    }
};


accordion.forEach(elem => {
    elem.addEventListener('click', openAccordion);
})










// new Glide(".glide_banner", {
//     type: "carousel",
//     startAt: 0,
//     perView: 1,
//     swipe: true
    
// }).mount();




// new Glide(".glide_about-us", {
//   type: "carousel",
//     startAt: 0,
//     perView: 1,
//     swipe: true
// }).mount();



// new Glide(".glide_portfolio", {
//   type: "carousel",
//     startAt: 0,
//     perView: 1,
//     swipe: true
// }).mount();



$('.slider-banner').slick({
    infinite: true,
    cssEase: 'ease',
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

$('.about-us-slider').slick({
    infinite: true,
    cssEase: 'ease',
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
});

$('.slider-porfolio-mobile').slick({
    infinite: true,
    cssEase: 'ease',
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
   
});

$('.slider-porfolio').slick({
    infinite: true,
    cssEase: 'ease',
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
});


$('.slider-team').slick({
    infinite: true,
    cssEase: 'ease',
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.instagram-slider').slick({
    infinite: true,
    cssEase: 'ease',
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});


let video = document.querySelector('.video'),
    btnPlayPause = document.querySelector('.play-pause'),
    videoCaption = document.querySelector('.frame-caption_7-wrapper'),
    videoQuote = document.querySelector('.blockquote-wrapper');

    btnPlayPause.addEventListener('click', function() {
        if ( video.paused == true ) {
            video.play();
            btnPlayPause.classList.add('play-pause_hide');
            video.setAttribute('controls', 'controls');
            
            videoQuote.classList.add('blockquote_animate');
            if ( document.body.clientWidth >= 768 ) {
                videoCaption.classList.add('frame-caption_7_animate');
            } else {
                false;
            }
        } else {
            video.pause();
            video.removeAttribute('controls');
        }
    })


    //-------------------- header

    let header = document.querySelector('.header');


  window.onscroll = function() {

    let scrolled = window.pageYOffset;
    
    if ( scrolled > 10 ) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
  }


//-------------------- modal

let modal = document.querySelector('.modal'),
    btnModal = document.querySelectorAll('.button_record'),
    modalBackground = document.querySelector('.modal__background'),
    btnCloseModal = document.querySelector('.modal__close');



const openModal = () => {
    modal.classList.add('active');
}

const closeModal = () => {
    modal.classList.remove('active');
}

btnModal.forEach( e => {
    e.addEventListener('click', openModal);
} )

modalBackground.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);



//-------------------- modal

let screenIPad = document.querySelectorAll('.screen-iPad');

if ( window.innerWidth === 1024 && window.innerHeight === 1366 ){
    screenIPad.forEach((e) => {
        e.classList.remove('col-lg-5');
    }) 
};









 

// window.onscroll = function() {
//     let scrollTop = window.pageYOffset ;
//     let count = document.querySelector('#coutn');
//     let countTop = count.offsetTop;
//     console.log(scrollTop + ' ' + countTop);
// };

// let body = document.querySelector('BODY');
// let count = document.querySelector('#counts');

// console.log(body, count);

// function getWindowRelativeOffset(parentWindow, elem) {
//     var offset = {
//         left : 0,
//         top : 0
//     };
//     // relative to the target field document
//     offset.left = elem.getBoundingClientRect().left;
//     offset.top = elem.getBoundingClientRect().top;
//     // now we will calculate according to the current document, this current
//     // document might be same as the document of target field or it may be
//     // parent of the document of the target field
//     var childWindow = elem.document.frames.window;
//     while (childWindow != parentWindow) {
//         offset.left = offset.left + childWindow.frameElement.getBoundingClientRect().left;
//         offset.top = offset.top + childWindow.frameElement.getBoundingClientRect().top;
//         childWindow = childWindow.parent;
//     }

//     return offset;
// };



// console.log(getWindowRelativeOffset(body, count));



//-------------------- animations


// $(document).ready(function(){
//     var fadeInUpBig = new WOW({
//         boxClass:"main-text_animate",
//         animateClass:"animated"
//     });
// })

new WOW().init();