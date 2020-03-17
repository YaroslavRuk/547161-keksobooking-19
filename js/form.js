'use strict';

(function () {
  var inputAddress = document.querySelector('#address');
  inputAddress.value = [window.map.locationMapPinMain.x + window.map.locationMapPinMain.width / 2, window.map.locationMapPinMain.y + window.map.locationMapPinMain.height / 2];

  var adForm = document.querySelector('.ad-form');
  var adFormFieldsets = adForm.children;

  var adDisabledAttribute = function () {
    for (var i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].setAttribute('disabled', 'disabled');
    }
  };

  window.addEventListener('load', function () {
    adDisabledAttribute();
  });

  var removeDisabledAttribute = function () {
    for (var i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].removeAttribute('disabled');
    }
  };

  var selectRooms = adForm.querySelector('#room_number');
  var selectGuests = adForm.querySelector('#capacity');
  var adFormSubmit = adForm.querySelector('.ad-form__submit');

  var onSelectGuests = function () {
    if (+selectRooms.value < +selectGuests.value || (+selectGuests.value === 0 && +selectRooms.value !== 100)) {
      selectGuests.setCustomValidity('Количество комнат не соответствует количеству гостей');
    } else {
      selectGuests.setCustomValidity('');
    }
  };

  adFormSubmit.addEventListener('click', onSelectGuests);

  window.form = {
    inputAddress: inputAddress,
    removeDisabledAttribute: removeDisabledAttribute()
  };
})();
