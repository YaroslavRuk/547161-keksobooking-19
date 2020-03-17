'use strict';

(function () {
  var load = function () {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        window.pin.onSuccess(xhr.response);
      }
    });

    /* xhr.addEventListener('error', function () {
      window.pin.onError(xhr.response);
    }); */

    xhr.open('GET', 'https://js.dump.academy/keksobooking/data');
    xhr.send();
  };

  window.backend = {
    load: load
  };
})();
