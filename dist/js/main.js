"use strict";

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
  adaptiveHeight: true
});
var $status = $('.pagingInfo');
var $slickElement = $('.famuous-slider');
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
}); // MEDIA page

var discographyOpenTogglers = document.querySelectorAll('.media__discography__item__toggler-open');
var TOGGLE_DISCOGRAPHY_CLASSES = {
  opened: 'media__discography__item-opened',
  closed: 'media__discography__item-closeed'
};
discographyOpenTogglers.forEach(function (toggler) {
  toggler.addEventListener('click', function (e) {
    var discography = e.target.parentNode;
    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.closed);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.opened);
  });
});
var discographyCloseTogglers = document.querySelectorAll('.media__discography__item__toggler-close');
discographyCloseTogglers.forEach(function (toggler) {
  toggler.addEventListener('click', function (e) {
    var discography = e.target.parentNode;
    discography.classList.remove(TOGGLE_DISCOGRAPHY_CLASSES.opened);
    discography.classList.add(TOGGLE_DISCOGRAPHY_CLASSES.closed);
  });
});
var archiveSlider = $('.media__archive__content__photos__slider');
var SLIDE_TO_SHOW = 3;

var initializeSlider = function initializeSlider() {
  archiveSlider.slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: SLIDE_TO_SHOW,
    // infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
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
});