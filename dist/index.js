'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userRepository = require('./userRepository');

Object.keys(_userRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _userRepository[key];
    }
  });
});
//# sourceMappingURL=index.js.map