'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOtherUsersWithSameUserNameOrEmail = exports.getByUserNameOrEmail = exports.createUserRepository = undefined;

var _ptzCoreRepository = require('ptz-core-repository');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const createUserRepository = exports.createUserRepository = _ramda2.default.curry((() => {
    var _ref = _asyncToGenerator(function* (collectionName, url) {
        const db = yield (0, _ptzCoreRepository.getDb)(url);
        const collection = (0, _ptzCoreRepository.getDbCollection)(db, collectionName);
        return {
            db,
            collectionName,
            save: (0, _ptzCoreRepository.save)(collection),
            getByIds: (0, _ptzCoreRepository.getByIds)(collection),
            find: (0, _ptzCoreRepository.find)(collection),
            getById: (0, _ptzCoreRepository.getById)(collection),
            getDbCollection: _ptzCoreRepository.getDbCollection,
            getOtherUsersWithSameUserNameOrEmail: getOtherUsersWithSameUserNameOrEmail(collection),
            getByUserNameOrEmail: getByUserNameOrEmail(collection)
        };
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})());
const getOtherUsersWithSameUserNameOrEmail = _ramda2.default.curry((collection, user) => {
    const query = {
        _id: { $ne: user.id },
        $or: [{ email: user.email }, { userName: user.userName }]
    };
    const select = {
        userName: 1,
        email: 1
    };
    return collection.find(query, select).toArray();
});
const getByUserNameOrEmail = _ramda2.default.curry((collection, userNameOrEmail) => {
    const query = {
        $or: [{ email: userNameOrEmail }, { userName: userNameOrEmail }]
    };
    return collection.findOne(query);
});
exports.getByUserNameOrEmail = getByUserNameOrEmail;
exports.getOtherUsersWithSameUserNameOrEmail = getOtherUsersWithSameUserNameOrEmail;
//# sourceMappingURL=userRepository.js.map
//# sourceMappingURL=userRepository.js.map