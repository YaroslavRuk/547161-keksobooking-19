'use strict';

(function () {
  var StatusCode = {
    ENTER_KEY: 13,
    ESC_KEY: 27
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

  var errorTemplate = document.querySelector('#error').content.querySelector('.error');
  var body = document.querySelector('body');

  var errorHandler = function (message) {
    var errorBlock = errorTemplate.cloneNode(true);
    errorBlock.querySelector('.error__message').textContent = message;
    body.appendChild(errorBlock);
    errorBlock.querySelector('.error__button').addEventListener('click', function () {
      errorBlock.classList.add('hidden');
      window.backend.load(function (data) {
        window.pin.insertsPins(data);
      }, window.map.errorHandler);
    });

    var onErrorWindow = function (evt) {
      if (evt.keyCode === StatusCode.ESC_KEY) {
        errorBlock.classList.add('hidden');
        document.removeEventListener('keydown', onErrorWindow);
      }
    };
    document.addEventListener('keydown', onErrorWindow);
  };

  window.map = {
    locationMapPinMain: locationMapPinMain,
    errorHandler: errorHandler
  };
})();
