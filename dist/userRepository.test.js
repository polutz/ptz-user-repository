'use strict';

var _mongodb = require('mongodb');

var _ptzAssert = require('ptz-assert');

var _ptzUserDomain = require('ptz-user-domain');

var _userRepository = require('./userRepository');

var _userRepository2 = _interopRequireDefault(_userRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var MONGO_URL = 'mongodb://localhost:27017/test';
var db, userRepository;
describe('UserRepository', function () {
    beforeEach(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _mongodb.MongoClient.connect(MONGO_URL);

                    case 2:
                        db = _context.sent;

                        userRepository = new _userRepository2.default(db);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));
    describe('save', function () {
        it('insert', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var user, userDb;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            user = new _ptzUserDomain.User({
                                displayName: 'Angelo',
                                email: 'angeloocana@gmail.com',
                                userName: 'angeloocana'
                            });
                            _context2.next = 3;
                            return userRepository.save(user);

                        case 3:
                            _context2.next = 5;
                            return userRepository.getById(user.id);

                        case 5:
                            userDb = _context2.sent;

                            (0, _ptzAssert.ok)(userDb);
                            (0, _ptzAssert.equal)(userDb.id, user.id);
                            (0, _ptzAssert.equal)(userDb.displayName, user.displayName);
                            (0, _ptzAssert.equal)(userDb.email, user.email);
                            (0, _ptzAssert.equal)(userDb.userName, user.userName);

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        })));
        it('update');
    });
    describe('find', function () {
        it('limit by 3');
        it('limit by 5');
    });
    describe('getOtherUsersWithSameUserNameOrEmail', function () {
        it('find by email');
        it('find by userName');
        it('not found');
    });
    describe('getByUserNameOrEmail', function () {
        it('find by email');
        it('find by userName');
        it('not found');
    });
});
//# sourceMappingURL=userRepository.test.js.map
//# sourceMappingURL=userRepository.test.js.map