'use strict';

(function () {
  var similarListElement = document.querySelector('.map__pins');
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var announcementsFromServer = [];
  var mapFilterForm = document.querySelector('.map__filters');

  var drawsPin = function (pin) {
    var pinElement = similarPinTemplate.cloneNode(true);
    pinElement.style.left = pin.location.x + 'px';
    pinElement.style.top = pin.location.y + 'px';
    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.offer.title;
    return pinElement;
  };

  var removePins = function () {
    document.querySelectorAll('.map__pin:not(.map__pin--main)').forEach(function (pin) {
      pin.remove();
    });
  };

  var insertsPins = function (pins) {
    removePins();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      fragment.appendChild(drawsPin(pins[i]));
    }
    similarListElement.appendChild(fragment);
  };

  mapFilterForm.addEventListener('change', function () {
    insertsPins(window.filter.filterPins(window.pin.announcementsFromServer));
  });

  window.pin = {
    insertsPins: insertsPins,
    removePins: removePins,
    announcementsFromServer: announcementsFromServer
  };
})();
