'use strict';

(function () {
  var init = function () {
    document.querySelector('.map').classList.remove('map--faded');
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
    window.backend.load(function (data) {
      window.filter.removeDisabledAttributeFilterForm();
      window.pin.announcementsFromServer = data;
      window.pin.insertsPins(window.filter.filterPins(data));
    }, window.map.errorHandler);
  };

  window.init = {
    init: init
  };
})();
