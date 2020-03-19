'use strict';

(function () {
  var TIMEOUT = 10000;

  var HttpStatuses = {
    SUCCESS: 200
  };

  var Url = {
    GET: 'https://js.dump.academy/keksobooking/data'
  };

  var load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === HttpStatuses.SUCCESS) {
        onSuccess(xhr.response);
      } else {
        onError('Ошибка получения данных');
      }
    });

    xhr.addEventListener('error', function () {
      onError('Во время загрузки произошла ошибка');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания ответа');
    });

    xhr.timeout = TIMEOUT;

    xhr.open('GET', Url.GET);
    xhr.send();
  };

  window.backend = {
    load: load
  };
})();
