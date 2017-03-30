'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ptzCoreRepository = require('ptz-core-repository');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserRepository = function (_BaseRepository) {
    _inherits(UserRepository, _BaseRepository);

    function UserRepository(db) {
        _classCallCheck(this, UserRepository);

        var collectionName = 'users';
        return _possibleConstructorReturn(this, (UserRepository.__proto__ || Object.getPrototypeOf(UserRepository)).call(this, db, collectionName));
    }

    _createClass(UserRepository, [{
        key: 'getOtherUsersWithSameUserNameOrEmail',
        value: function getOtherUsersWithSameUserNameOrEmail(user) {
            var query = {
                _id: { $ne: user.id },
                $or: [{ email: user.email }, { userName: user.userName }]
            };
            var select = {
                userName: 1,
                email: 1
            };
            return this.getDbCollection().find(query, select).toArray();
        }
    }, {
        key: 'getByUserNameOrEmail',
        value: function getByUserNameOrEmail(userNameOrEmail) {
            var query = {
                $or: [{ email: userNameOrEmail }, { userName: userNameOrEmail }]
            };
            return this.getDbCollection().findOne(query);
        }
    }]);

    return UserRepository;
}(_ptzCoreRepository.BaseRepository);

exports.default = UserRepository;