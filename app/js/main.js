$(".burger").on('click',function(){
  document.querySelector(".nav").classList.toggle("show");
  document.querySelector(".burger").classList.toggle("burger-active");
});



// image preview

const IMAGE_PREVIEW_CLASSES = {
  root: 'image-preview',
  closed: 'image-preview-closed',
  opened: 'image-preview-opened',
  closeIcon: 'image-preview__close-icon',
  image: 'image-preview__image',
};

function getImagePreviewContainer() {
  return document.querySelector(`.${IMAGE_PREVIEW_CLASSES.root}`);
}

function getImagePreview() {
  return document.querySelector(`.${IMAGE_PREVIEW_CLASSES.image}`);
}

function openImagePreview(src) {
  const imagePreview = getImagePreviewContainer();
  const image = getImagePreview();

  image.src = src;
  imagePreview.classList.remove(IMAGE_PREVIEW_CLASSES.closed);
  imagePreview.classList.add(IMAGE_PREVIEW_CLASSES.opened);
}

function closeImagePreview() {
  const imagePreview = getImagePreviewContainer();
  const image = getImagePreview();

  imagePreview.classList.add(IMAGE_PREVIEW_CLASSES.closed);
  imagePreview.classList.remove(IMAGE_PREVIEW_CLASSES.opened);

  setTimeout(() => {
    image.src = '';
  }, 300);
}

function initializeImagePreview() {
  // const closeIcon = document.querySelector(`.${IMAGE_PREVIEW_CLASSES.closeIcon}`);
  // if (closeIcon) {
  //   closeIcon.addEventListener('click', closeImagePreview);
  // }
  const imagePreview = getImagePreviewContainer();

  if (imagePreview) {
    imagePreview.addEventListener('click', closeImagePreview);
  }
}

function initializeImagesToPreview() {
  const allImages = document.querySelectorAll('.image-to-preview');

  allImages.forEach((img) => {
    img.addEventListener('click', (e) => {
      openImagePreview(e.target.src);
    });
  });
}

if (getImagePreviewContainer()) {
  initializeImagePreview();
  initializeImagesToPreview();
}


$('.main-info').slick({
    dots: true,
    infinite: true,
    speed: 300,
    //autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          arrows: false,
          slidesToShow: 1,
  
        }
      }
    ]
  });
  $('.comunity-part').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
 
          slidesToShow: 1
        }
      }
    ]
  });
  $('.press-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
  
          slidesToShow: 1
        }
      }
    ]
  });
  
$('.famuous-slider').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  infinite: true,
  swipeToSlide: true,
  speed: 300,
  //autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 998,
      settings: {
        arrows:  true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows:  true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      
        slidesToShow: 1,
        slidesToS: 1,
      }
    }
  ]
});
$('.news-slider').slick({
  dots: true,
  infinite: true,
  //autoplay: true,
  prevArrow: false,
  nextArrow: false,
  autoplaySpeed: 2000,
  swipeToSlide: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  
});
var $status = $('.pagingInfo');
var $slickElement = $('.famuous-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});


// MEDIA page
  // discogrphy
const discographyOpenTogglers = document.querySelectorAll('.discography__item__toggler-open');
const TOGGLE_DISCOGRAPHY_CLASSES = {
  opened: 'discography__item-opened',
  closed: 'discography__item-closed',
};


discographyOpenTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    const discography = e.target.parentNode;

    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.closed);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.opened);
  });
});

const discographyCloseTogglers = document.querySelectorAll('.discography__item__toggler-close');

discographyCloseTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    const discography = e.target.parentNode;
    
    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.opened);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.closed);
  });
});

// archive slider

const archiveSlider = $('.media__archive__content__photos__slider');
const SLIDE_TO_SHOW = 1;

const initializeSlider = () => {
  archiveSlider.slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: SLIDE_TO_SHOW,
    // infinite: false,
    speed: 500,
    autoplay: false,
    adaptiveHeight: true,
  });
};

const terminateSlider = () => {
  archiveSlider.slick('destroy');
};

initializeSlider();

const YEAR_CLASS = 'media__archive__content__years__item';
const ACTIVE_YEAR_CLASS = 'media__archive__content__years__item-active';

const getActiveYear = () => document.querySelector(`.${ACTIVE_YEAR_CLASS}`);

const navigation = document.querySelector('.media__archive__content__photos__navigation');

archiveSlider.on('afterChange', (e, slider, currentSlide) => {
  const { slideCount } = slider;
  // navigation.innerHTML = `${currentSlide + 1} / ${slideCount}`;

  if (slideCount - SLIDE_TO_SHOW === currentSlide) {
    const activeYear = getActiveYear();
    const firstYear = document.querySelector(`.${YEAR_CLASS}`);

    activeYear.classList.remove(ACTIVE_YEAR_CLASS);

    activeYear.nextElementSibling 
      ? activeYear.nextElementSibling.classList.add(ACTIVE_YEAR_CLASS)
      : firstYear.classList.add(ACTIVE_YEAR_CLASS);

    terminateSlider();
    initializeSlider();
  }
});

const allYears = document.querySelectorAll(`.${YEAR_CLASS}`);

allYears.forEach((year) => {
  year.addEventListener('click', (e) => {
    const activeYear = getActiveYear();
    activeYear.classList.remove(ACTIVE_YEAR_CLASS);

    e.target.classList.add(ACTIVE_YEAR_CLASS);

    terminateSlider();
    initializeSlider();
  });
});

// photogallery mobile

const allYearsMobile = document.querySelectorAll('.media__archive__content-mobile__items__item__year');

allYearsMobile.forEach((year) => {
  year.addEventListener('click', ({ target }) => {
    const { parentNode } = target;
    const activeClass = 'media__archive__content-mobile__items__item-opened';

    if (parentNode.classList.contains(activeClass)) {
      parentNode.classList.remove(activeClass);

      return;
    }

    parentNode.classList.add(activeClass);
  });
});

// video
const ACTIVE_PREVIEW_CLASS = 'media__video__content__list__preview-active';
const PREVIEW_CLASS = 'media__video__content__list__preview';
const PLAYER_ROOT_URL = 'https://www.youtube.com/embed/';

const previews = document.querySelectorAll(`.${PREVIEW_CLASS}`);
const player = document.querySelector('.media__video__content__player');

const setPlayerSrc = (id) => {
  player.setAttribute('src', `${PLAYER_ROOT_URL}${id}`);

  const currentActivePreview = document.querySelector(`.${ACTIVE_PREVIEW_CLASS}`);
  const futureActivePreview = Array.from(previews).find((preview) => preview.dataset.videoid === id);

  if (currentActivePreview) {
    currentActivePreview.classList.remove(ACTIVE_PREVIEW_CLASS);
  }

  futureActivePreview.classList.add(ACTIVE_PREVIEW_CLASS);
};

if (previews && previews.length) {
  previews.forEach((preview) => {
    preview.addEventListener('click', (e) => {
      const { videoid } = e.target.dataset;
  
      setPlayerSrc(videoid);
    });
  });
  
  const defaultVideo = previews[0].dataset.videoid;
  
  setPlayerSrc(defaultVideo);
}
  
