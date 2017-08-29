'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var Core = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const MONGO_URL = 'mongodb://localhost:27017/ptz-core-repo';
var userRepository;
describe('UserRepository', () => {
    beforeEach(_asyncToGenerator(function* () {
        userRepository = yield Core.createUserRepository('test-collection', MONGO_URL);
    }));
    describe('getOtherUsersWithSameUserNameOrEmail', () => {
        it('find by email', _asyncToGenerator(function* () {
            const user = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };
            const user2 = {
                id: 'testid2',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'gsgdsgsd'
            };
            yield userRepository.save(user);
            const userDb = yield userRepository.getOtherUsersWithSameUserNameOrEmail(user2);
            (0, _ptzAssert.equal)(userDb[0].email, user2.email);
            (0, _ptzAssert.notEqual)(userDb[0].id, user2.id);
        }));
        it('find by userName', _asyncToGenerator(function* () {
            const user = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };
            const user2 = {
                id: 'testid2',
                displayName: 'Angelo',
                email: 'advadvdavad@gmail.com',
                userName: 'angeloocana'
            };
            yield userRepository.save(user);
            const userDb = yield userRepository.getOtherUsersWithSameUserNameOrEmail(user2);
            (0, _ptzAssert.equal)(userDb[0].userName, user2.userName);
            (0, _ptzAssert.notEqual)(userDb[0].id, user2.id);
        }));
        it('not found', _asyncToGenerator(function* () {
            const user = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'dgh3t4hd@gmail.com',
                userName: 'dgh3t4hd'
            };
            const userDb = yield userRepository.getOtherUsersWithSameUserNameOrEmail(user);
            (0, _ptzAssert.emptyArray)(userDb);
        }));
    });
    describe('getByUserNameOrEmail', () => {
        it('find by email', _asyncToGenerator(function* () {
            const user = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };
            yield userRepository.save(user);
            const userDb = yield userRepository.getByUserNameOrEmail('angeloocana@gmail.com');
            (0, _ptzAssert.ok)(userDb);
            (0, _ptzAssert.equal)(userDb.id, user.id);
            (0, _ptzAssert.equal)(userDb.displayName, user.displayName);
            (0, _ptzAssert.equal)(userDb.email, user.email);
            (0, _ptzAssert.equal)(userDb.userName, user.userName);
        }));
        it('find by userName', _asyncToGenerator(function* () {
            const user = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };
            yield userRepository.save(user);
            const userDb = yield userRepository.getByUserNameOrEmail('angeloocana');
            (0, _ptzAssert.ok)(userDb);
            (0, _ptzAssert.equal)(userDb.id, user.id);
            (0, _ptzAssert.equal)(userDb.displayName, user.displayName);
            (0, _ptzAssert.equal)(userDb.email, user.email);
            (0, _ptzAssert.equal)(userDb.userName, user.userName);
        }));
        it('not found', _asyncToGenerator(function* () {
            const userDb = yield userRepository.getByUserNameOrEmail('dgdsfsfbsf');
            (0, _ptzAssert.notOk)(userDb);
        }));
    });
});
//# sourceMappingURL=userRepository.test.js.map
//# sourceMappingURL=userRepository.test.js.map