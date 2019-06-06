
// --------------------   scroll   --------------------

const navbar = document.querySelector('#navbar');
const scrollspy = new VanillaScrollspy(navbar, 2000);
scrollspy.init();

const navbarMob = document.querySelector('#navbar-mob');
const scrollspyMob = new VanillaScrollspy(navbarMob, 2000);
scrollspyMob.init();

// --------------------   print   --------------------

let printHistoryExperience = new Typed('#experience', {
    stringsElement: '#strings-experience',
    showCursor: false
  });

let printHistoryClients = new Typed('#clients', {
    stringsElement: '#string-clients',
    showCursor: false
  });

let printHistoryYears = new Typed('#years', {
    stringsElement: '#string-years',
    showCursor: false
  });

let printHistoryStudents = new Typed('#students', {
    stringsElement: '#string-students',
    showCursor: false
  });

let printHistoryCaption = new Typed('#history-caption', {
    stringsElement: '#string-history-caption',
    showCursor: false
  });

let printRecordCaptionHundred = new Typed('#record-caption-100', {
    stringsElement: '#string-record-caption-100',
    showCursor: false,
    typeSpeed: 80,
  });

let printRecordCaptionBeard = new Typed('#record-caption-beard', {
    stringsElement: '#string-record-caption-beard',
    showCursor: false
  });

let printServicesCaption = new Typed('#services-caption', {
    stringsElement: '#string-services-caption',
    showCursor: false
  });

let printAboutUsCaptionMob = new Typed('#about-us-caption-mob', {
    stringsElement: '#string-about-us-caption-mob',
    showCursor: false
  });

let printAboutUsCaption = new Typed('#about-us-caption', {
    stringsElement: '#string-about-us-caption',
    showCursor: false
  });

let printPortfolioCaption = new Typed('#portfolio-caption', {
    stringsElement: '#string-portfolio-caption',
    showCursor: false
  });

let printTeamCaption = new Typed('#team-caption', {
    stringsElement: '#string-team-caption',
    showCursor: false
  });

let printReviewsCaption = new Typed('#reviews-caption', {
    stringsElement: '#string-reviews-caption',
    showCursor: false
  });

let printInstagramCaption = new Typed('#instagram-caption', {
    stringsElement: '#string-instagram-caption',
    showCursor: false
  });

let printFAQCaption = new Typed('#faq-caption', {
    stringsElement: '#string-faq-caption',
    showCursor: false
  });

let printFooterCaption = new Typed('#footer-caption', {
    stringsElement: '#string-footer-caption',
    showCursor: false
  });

// --------------------   сounter   --------------------

const Counter = {
    settings: {
        speed: 3000
    },

    count: function(number_el, number) {
        const _this = this;

        let speed = _this.settings.speed;
        if (number_el.hasAttribute("data-speed")) {
            speed = parseInt(number_el.getAttribute("data-speed"));
        }

        if (number_el && number > 0) {
            const step_min = 50;
            let step_speed = Math.abs(Math.floor(speed / number));
                step_speed = Math.max(step_speed, step_min);

            const start_time = new Date().getTime();
            const end_time = start_time + speed;
            let timer;

            const step = () => {
                const now = new Date().getTime();
                const left = Math.max((end_time - now) / speed, 0);
                const value = Math.round(number - (left * number));
                number_el.innerHTML = value;
                if (value == number)
                    clearInterval(timer);
            };

            timer = setInterval(step, step_speed);
            step();
        }
    },

    init: function(el) {
        const _this = this;
        const number_el = el.getElementsByClassName("counter-number")[0];
        const number = parseInt(number_el.innerText);
        number_el.innerHTML = "0";
        _this.count(number_el, number);
    }
};

(function() {
    // Initiate all instances on the page
    const counters = document.getElementsByClassName("counter");
    for (let i = 0; i < counters.length; i++) {
        Counter.init(counters[i]);
    }
})();




      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      let btnPlayPause = document.querySelector('.play-pause'),
        videoCaption = document.querySelector('.frame-caption_7-wrapper'),
        videoQuote = document.querySelector('.blockquote-wrapper'),
        videoMask = document.querySelector('.video');

      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '540',
          videoId: 'jNVZjNB8ptk',
            playerVars: {rel: 0, showinfo: 0, ecver: 2},
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        // event.target.playVideo();
          // $('.play-button').on('click', function () {
          //     player.playVideo();
          // })
          btnPlayPause.addEventListener('click', () => {
             player.playVideo();
             btnPlayPause.classList.add('play-pause_hide');
             videoQuote.classList.add('blockquote_animate');
             videoMask.classList.add('video_animate');
             if ( document.body.clientWidth >= 768 ) {
                videoCaption.classList.add('frame-caption_7_animate');
            } else {
                false;
            };
          });
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          // done = true;

            $('.play-button').on('click', function () {
                player.pauseVideo();

            })
        } else {
            $('.play-button').on('click', function () {
                player.playVideo();
            })
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

// --------------------   service   --------------------

let service = document.querySelectorAll('.service');
    
function openService(a){
        a.forEach( elem => {
            elem.addEventListener('click', e => {
                elem.classList.toggle('service_active');
            })
        })
};

if ( document.body.clientWidth <= 991 ) {
    openService(service);
} else {
    null;
};

// --------------------   hamburgerMenu   --------------------

let hamburgerMenu = document.querySelector('.hamburger-menu'),
    menu = document.querySelector('.nav-mobile');

hamburgerMenu.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle('hamburger-menu_active');
    menu.classList.toggle('nav-mobile_active');
});

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
});

//--------------------   header   --------------------

let header = document.querySelector('.header');

  window.onscroll = function() {

    let scrolled = window.pageYOffset;
    
    if ( scrolled > 10 ) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
  };

//--------------------   modal   --------------------

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

//--------------------  screenIPad   --------------------

let screenIPad = document.querySelectorAll('.screen-iPad');

if ( window.innerWidth === 1024 && window.innerHeight === 1366 ){
    screenIPad.forEach((e) => {
        e.classList.remove('col-lg-5')
    }) 
};

//--------------------  WOW   --------------------

new WOW().init();

//--------------------  slick   --------------------

$('.slider-banner').slick({
    infinite: true,
    cssEase: 'ease',
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true
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

//--------------------  Glide   --------------------

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




