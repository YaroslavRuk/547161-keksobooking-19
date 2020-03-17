'use strict';

(function () {
  var StatusCode = {
    ENTER_KEY: 13
  };

  var mapPinMain = document.querySelector('.map__pin--main');
  var locationMapPinMain = mapPinMain.getBoundingClientRect();

  var activePage = function (evt) {
    evt.preventDefault();
    window.init.init();
    window.form.removeDisabledAttribute();
    mapPinMain.removeEventListener('mousedown', onPinMainFirstMousedown);
    mapPinMain.removeEventListener('keydown', onPainMainEnterKeydown);
    window.form.inputAddress.value = [locationMapPinMain.x + locationMapPinMain.width / 2, locationMapPinMain.y + locationMapPinMain.height];
  };

  var onPinMainFirstMousedown = function (evt) {
    if (evt.which === 1) {
      activePage(evt);
    }
  };

  var onPainMainEnterKeydown = function (evt) {
    if (evt.keyCode === StatusCode.ENTER_KEY) {
      activePage(evt);
    }
  };

  mapPinMain.addEventListener('mousedown', onPinMainFirstMousedown);
  mapPinMain.addEventListener('keydown', onPainMainEnterKeydown);

  window.map = {
    locationMapPinMain: locationMapPinMain
  };
})();
