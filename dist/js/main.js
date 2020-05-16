"use strict";

// image preview
var IMAGE_PREVIEW_CLASSES = {
  root: 'image-preview',
  closed: 'image-preview-closed',
  opened: 'image-preview-opened',
  closeIcon: 'image-preview__close-icon',
  image: 'image-preview__image'
};

function getImagePreviewElement() {
  return document.querySelector(".".concat(IMAGE_PREVIEW_CLASSES.root));
}

function openImagePreview(src) {
  var imagePreview = getImagePreviewElement();
  var image = document.querySelector(".".concat(IMAGE_PREVIEW_CLASSES.image));
  image.src = src;
  imagePreview.classList.remove(IMAGE_PREVIEW_CLASSES.closed);
  imagePreview.classList.add(IMAGE_PREVIEW_CLASSES.opened);
}

function closeImagePreview() {
  var imagePreview = getImagePreviewElement();
  var image = document.querySelector(".".concat(IMAGE_PREVIEW_CLASSES.image));
  imagePreview.classList.add(IMAGE_PREVIEW_CLASSES.closed);
  imagePreview.classList.remove(IMAGE_PREVIEW_CLASSES.opened);
  setTimeout(function () {
    image.src = '';
  }, 300);
}

function initializeImagePreview() {
  var closeIcon = document.querySelector(".".concat(IMAGE_PREVIEW_CLASSES.closeIcon));

  if (closeIcon) {
    closeIcon.addEventListener('click', closeImagePreview);
  }
}

function initializeImagesToPreview() {
  var allImages = document.querySelectorAll('.image-to-preview');
  allImages.forEach(function (img) {
    img.addEventListener('click', function (e) {
      openImagePreview(e.target.src);
    });
  });
}

initializeImagePreview();
initializeImagesToPreview();
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
  swipeToSlide: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true
});
$('.famuous-slider').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  infinite: true,
  swipeToSlide: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true
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
  adaptiveHeight: true
});
var $status = $('.pagingInfo');
var $slickElement = $('.famuous-slider');
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
}); // MEDIA page
// discogrphy

var discographyOpenTogglers = document.querySelectorAll('.discography__item__toggler-open');
var TOGGLE_DISCOGRAPHY_CLASSES = {
  opened: 'discography__item-opened',
  closed: 'discography__item-closed'
};
discographyOpenTogglers.forEach(function (toggler) {
  toggler.addEventListener('click', function (e) {
    var discography = e.target.parentNode;
    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.closed);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.opened);
  });
});
var discographyCloseTogglers = document.querySelectorAll('.discography__item__toggler-close');
discographyCloseTogglers.forEach(function (toggler) {
  toggler.addEventListener('click', function (e) {
    var discography = e.target.parentNode;
    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.opened);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.closed);
  });
}); // archive slider

var archiveSlider = $('.media__archive__content__photos__slider');
var SLIDE_TO_SHOW = 1;

var initializeSlider = function initializeSlider() {
  archiveSlider.slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: SLIDE_TO_SHOW,
    // infinite: false,
    speed: 500,
    autoplay: false,
    adaptiveHeight: true
  });
};

var terminateSlider = function terminateSlider() {
  archiveSlider.slick('destroy');
};

initializeSlider();
var YEAR_CLASS = 'media__archive__content__years__item';
var ACTIVE_YEAR_CLASS = 'media__archive__content__years__item-active';

var getActiveYear = function getActiveYear() {
  return document.querySelector(".".concat(ACTIVE_YEAR_CLASS));
};

var navigation = document.querySelector('.media__archive__content__photos__navigation');
archiveSlider.on('afterChange', function (e, slider, currentSlide) {
  var slideCount = slider.slideCount; // navigation.innerHTML = `${currentSlide + 1} / ${slideCount}`;

  if (slideCount - SLIDE_TO_SHOW === currentSlide) {
    var activeYear = getActiveYear();
    var firstYear = document.querySelector(".".concat(YEAR_CLASS));
    activeYear.classList.remove(ACTIVE_YEAR_CLASS);
    activeYear.nextElementSibling ? activeYear.nextElementSibling.classList.add(ACTIVE_YEAR_CLASS) : firstYear.classList.add(ACTIVE_YEAR_CLASS);
    terminateSlider();
    initializeSlider();
  }
});
var allYears = document.querySelectorAll(".".concat(YEAR_CLASS));
allYears.forEach(function (year) {
  year.addEventListener('click', function (e) {
    var activeYear = getActiveYear();
    activeYear.classList.remove(ACTIVE_YEAR_CLASS);
    e.target.classList.add(ACTIVE_YEAR_CLASS);
    terminateSlider();
    initializeSlider();
  });
}); // photogallery mobile

var allYearsMobile = document.querySelectorAll('.media__archive__content-mobile__items__item__year');
allYearsMobile.forEach(function (year) {
  year.addEventListener('click', function (_ref) {
    var target = _ref.target;
    var parentNode = target.parentNode;
    var activeClass = 'media__archive__content-mobile__items__item-opened';

    if (parentNode.classList.contains(activeClass)) {
      parentNode.classList.remove(activeClass);
      return;
    }

    parentNode.classList.add(activeClass);
  });
});
var archiveContentDesktop = document.querySelector('.media__archive__content');
var archiveContentMobile = document.querySelector('.media__archive__content-mobile');

function processPhotoGalleryView() {
  if (window.innerWidth <= 768) {
    archiveContentDesktop.style.display = 'none';
    archiveContentMobile.style.display = 'block';
  } else {
    archiveContentDesktop.style.display = 'flex';
    archiveContentMobile.style.display = 'none';
  }
}

processPhotoGalleryView();
window.addEventListener('resize', processPhotoGalleryView); // video

var ACTIVE_PREVIEW_CLASS = 'media__video__content__list__preview-active';
var PREVIEW_CLASS = 'media__video__content__list__preview';
var PLAYER_ROOT_URL = 'https://www.youtube.com/embed/';
var previews = document.querySelectorAll(".".concat(PREVIEW_CLASS));
var player = document.querySelector('.media__video__content__player');

var setPlayerSrc = function setPlayerSrc(id) {
  player.setAttribute('src', "".concat(PLAYER_ROOT_URL).concat(id));
  var currentActivePreview = document.querySelector(".".concat(ACTIVE_PREVIEW_CLASS));
  ;
  var futureActivePreview = Array.from(previews).find(function (preview) {
    return preview.dataset.videoid === id;
  });

  if (currentActivePreview) {
    currentActivePreview.classList.remove(ACTIVE_PREVIEW_CLASS);
  }

  futureActivePreview.classList.add(ACTIVE_PREVIEW_CLASS);
};

previews.forEach(function (preview) {
  preview.addEventListener('click', function (e) {
    var videoid = e.target.dataset.videoid;
    setPlayerSrc(videoid);
  });
});
var defaultVideo = previews[0].dataset.videoid;
setPlayerSrc(defaultVideo);