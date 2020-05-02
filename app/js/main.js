$('.main-info').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.comunity-part').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true
  });
  $('.press-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true
  });
  
$('.famuous-slider').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  //infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
});
var $status = $('.pagingInfo');
var $slickElement = $('.famuous-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});


// MEDIA page

const discographyOpenTogglers = document.querySelectorAll('.media__discography__item__toggler-open');
const TOGGLE_DISCOGRAPHY_CLASSES = {
  opened: 'media__discography__item-opened',
  closed: 'media__discography__item-closeed',
};


discographyOpenTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    const discography = e.target.parentNode;

    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.closed);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.opened);
  });
});

const discographyCloseTogglers = document.querySelectorAll('.media__discography__item__toggler-close');

discographyCloseTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    const discography = e.target.parentNode;
    
    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.opened);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.closed);
  });
});

const archiveSlider = $('.media__archive__content__photos__slider');
const SLIDE_TO_SHOW = 3;

const initializeSlider = () => {
  archiveSlider.slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: SLIDE_TO_SHOW,
    // infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
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