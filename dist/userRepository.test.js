'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var Core = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var MONGO_URL = 'mongodb://localhost:27017/ptz-core-repo';
var userRepository;
describe('UserRepository', function () {
    beforeEach(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return Core.createUserRepository('test-collection', MONGO_URL);

                    case 2:
                        userRepository = _context.sent;

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));
    describe('getOtherUsersWithSameUserNameOrEmail', function () {
        it('find by email', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var user, user2, userDb;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            user = {
                                id: 'testid',
                                displayName: 'Angelo',
                                email: 'angeloocana@gmail.com',
                                userName: 'angeloocana'
                            };
                            user2 = {
                                id: 'testid2',
                                displayName: 'Angelo',
                                email: 'angeloocana@gmail.com',
                                userName: 'gsgdsgsd'
                            };
                            _context2.next = 4;
                            return userRepository.save(user);

                        case 4:
                            _context2.next = 6;
                            return userRepository.getOtherUsersWithSameUserNameOrEmail(user2);

                        case 6:
                            userDb = _context2.sent;

                            (0, _ptzAssert.equal)(userDb[0].email, user2.email);
                            (0, _ptzAssert.notEqual)(userDb[0].id, user2.id);

                        case 9:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        })));
        it('find by userName', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
            var user, user2, userDb;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            user = {
                                id: 'testid',
                                displayName: 'Angelo',
                                email: 'angeloocana@gmail.com',
                                userName: 'angeloocana'
                            };
                            user2 = {
                                id: 'testid2',
                                displayName: 'Angelo',
                                email: 'advadvdavad@gmail.com',
                                userName: 'angeloocana'
                            };
                            _context3.next = 4;
                            return userRepository.save(user);

                        case 4:
                            _context3.next = 6;
                            return userRepository.getOtherUsersWithSameUserNameOrEmail(user2);

                        case 6:
                            userDb = _context3.sent;

                            (0, _ptzAssert.equal)(userDb[0].userName, user2.userName);
                            (0, _ptzAssert.notEqual)(userDb[0].id, user2.id);

                        case 9:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        })));
        it('not found', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
            var user, userDb;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            user = {
                                id: 'testid',
                                displayName: 'Angelo',
                                email: 'dgh3t4hd@gmail.com',
                                userName: 'dgh3t4hd'
                            };
                            _context4.next = 3;
                            return userRepository.getOtherUsersWithSameUserNameOrEmail(user);

                        case 3:
                            userDb = _context4.sent;

                            (0, _ptzAssert.emptyArray)(userDb);

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        })));
    });
    describe('getByUserNameOrEmail', function () {
        it('find by email', _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
            var user, userDb;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            user = {
                                id: 'testid',
                                displayName: 'Angelo',
                                email: 'angeloocana@gmail.com',
                                userName: 'angeloocana'
                            };
                            _context5.next = 3;
                            return userRepository.save(user);

                        case 3:
                            _context5.next = 5;
                            return userRepository.getByUserNameOrEmail('angeloocana@gmail.com');

                        case 5:
                            userDb = _context5.sent;

                            (0, _ptzAssert.ok)(userDb);
                            (0, _ptzAssert.equal)(userDb.id, user.id);
                            (0, _ptzAssert.equal)(userDb.displayName, user.displayName);
                            (0, _ptzAssert.equal)(userDb.email, user.email);
                            (0, _ptzAssert.equal)(userDb.userName, user.userName);

                        case 11:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        })));
        it('find by userName', _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
            var user, userDb;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            user = {
                                id: 'testid',
                                displayName: 'Angelo',
                                email: 'angeloocana@gmail.com',
                                userName: 'angeloocana'
                            };
                            _context6.next = 3;
                            return userRepository.save(user);

                        case 3:
                            _context6.next = 5;
                            return userRepository.getByUserNameOrEmail('angeloocana');

                        case 5:
                            userDb = _context6.sent;

                            (0, _ptzAssert.ok)(userDb);
                            (0, _ptzAssert.equal)(userDb.id, user.id);
                            (0, _ptzAssert.equal)(userDb.displayName, user.displayName);
                            (0, _ptzAssert.equal)(userDb.email, user.email);
                            (0, _ptzAssert.equal)(userDb.userName, user.userName);

                        case 11:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined);
        })));
        it('not found', _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
            var userDb;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return userRepository.getByUserNameOrEmail('dgdsfsfbsf');

                        case 2:
                            userDb = _context7.sent;

                            (0, _ptzAssert.notOk)(userDb);

                        case 4:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, undefined);
        })));
    });
});
//# sourceMappingURL=userRepository.test.js.map
//# sourceMappingURL=userRepository.test.js.map