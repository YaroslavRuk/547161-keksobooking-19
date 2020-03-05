'use strict';

var ANNOUNCEMENTS_COUNT = 8;
var AVATARS_PHOTOS = ['01', '02', '03', '04', '05', '06', '07', '08'];
var TITLE = ['nam libero', 'justo laoreet', 'sit amet', 'cursus sit', 'amet dictum', 'sit amet', 'justo donec', 'enim diam'];
var HOUSE_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var CHECKIN_AND_CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
var MAP_WIDTH = 1200;
var similarListElement = document.querySelector('.map__pins');
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var getRandomElement = function (randomArray) {
  return randomArray[Math.floor(Math.random() * randomArray.length)];
};

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var createAnnouncementsArray = function () {
  var announcements = [];
  for (var i = 0; i < ANNOUNCEMENTS_COUNT; i++) {
    announcements.push({
      'author': {
        'avatar': 'img/avatars/user' + getRandomElement(AVATARS_PHOTOS) + '.png'
      },
      'offer': {
        'title': getRandomElement(TITLE),
        'address': '600, 350',
        'price': getRandomInt(0, 1000000),
        'type': getRandomElement(HOUSE_TYPE),
        'rooms': getRandomInt(1, 10),
        'guests': getRandomInt(1, 7),
        'checkin': getRandomElement(CHECKIN_AND_CHECKOUT_TIME),
        'checkout': getRandomElement(CHECKIN_AND_CHECKOUT_TIME),
        'features': FEATURES,
        'description': 'Красивая квартира с хорошим видом на японцев',
        'photos': PHOTOS
      },
      'location': {
        'x': getRandomInt(0, MAP_WIDTH),
        'y': getRandomInt(130, 630)
      }
    });
  }
  return announcements;
};

var drawsPin = function (pin) {
  var pinElement = similarPinTemplate.cloneNode(true);
  pinElement.style.left = pin.location.x + 'px';
  pinElement.style.top = pin.location.y + 'px';
  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = pin.offer.title;
  return pinElement;
};

var insertsPins = function (pins) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < pins.length; i++) {
    fragment.appendChild(drawsPin(pins[i]));
  }
  similarListElement.appendChild(fragment);
};

var init = function () {
  var announcementsArray = createAnnouncementsArray();
  insertsPins(announcementsArray);
  document.querySelector('.map').classList.remove('map--faded');
};
init();
