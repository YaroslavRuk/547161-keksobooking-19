'use strict';

(function () {
  var similarListElement = document.querySelector('.map__pins');
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

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

  window.pin = {
    insertsPins: insertsPins()
  };
})();
