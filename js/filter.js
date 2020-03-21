'use strict';

(function () {
  var announcementsFromServer = [];
  var mapFilterForm = document.querySelector('.map__filters');
  var mapFilterFormChildren = mapFilterForm.children;
  var housingType = document.querySelector('#housing-type');

  var changeHousingType = function () {
    for (var i = 0; i < announcementsFromServer.length; i++) {
      if (housingType.value === announcementsFromServer[i].offer.type) {
        window.pin.insertsPins(announcementsFromServer[i]);
      }
    }
  };

  housingType.addEventListener('click', changeHousingType);

  /* var housingTypeToHousingType = {
    'palace': 'palace',
    'flat': 'flat',
    'house': 'house',
    'bungalo': 'bungalo'
  };*/

  /* var filterTypeOfHouse = function () {
    announcementsFromServer.filter(function (oneAnnouncement) {
      if (oneAnnouncement.offer.type === housingTypeToHousingType[housingType.value]) {
        return window.pin.insertsPins(oneAnnouncement);
      }
    });
  };

  filterTypeOfHouse();*/

  /* if (housingTypeToHousingType[housingType.value] === announcementsFromServer.offer.type) {
    announcementsFromServer.filter(function (typeOfHouse) {
      return window.pin.insertsPins(typeOfHouse);

    });
  }
*/

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

  window.filter = {
    announcementsFromServer: announcementsFromServer,
    adDisabledAttributeFilterForm: adDisabledAttributeFilterForm,
    removeDisabledAttributeFilterForm: removeDisabledAttributeFilterForm,
    housingType: housingType,
    changeHousingType: changeHousingType
  };
})();
