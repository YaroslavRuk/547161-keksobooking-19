'use strict';

(function () {
  var init = function () {
    // var announcementsArray = window.data.createAnnouncementsArray();
    // window.pin.insertsPins(announcementsArray);
    document.querySelector('.map').classList.remove('map--faded');
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
    window.backend.load();
  };

  window.init = {
    init: init
  };
})();
