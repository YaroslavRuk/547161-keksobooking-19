'use strict';

(function () {

  var mapFilterForm = document.querySelector('.map__filters');
  var mapFilterFormChildren = mapFilterForm.children;
  var housingType = document.querySelector('#housing-type');

  var adDisabledAttributeFilterForm = function () {
    for (var i = 0; i < mapFilterFormChildren.length; i++) {
      mapFilterFormChildren[i].setAttribute('disabled', 'disabled');
    }
  };

  var removeDisabledAttributeFilterForm = function () {
    for (var i = 0; i < mapFilterFormChildren.length; i++) {
      mapFilterFormChildren[i].removeAttribute('disabled');
    }
  };

  var filterByHousingType = function (pin) {
    return pin.offer.type === housingType.value || housingType.value === 'any';
  };

  var filterPins = function (pins) {
    var newPins = [];
    var i = 0;
    while (newPins.length < 5 && i < pins.length) {
      var pin = pins[i];
      if (filterByHousingType(pin)) {
        newPins.push(pin);
      }
      i++;
    }
    return newPins;
  };

  window.filter = {
    adDisabledAttributeFilterForm: adDisabledAttributeFilterForm,
    removeDisabledAttributeFilterForm: removeDisabledAttributeFilterForm,
    filterPins: filterPins
  };
})();
