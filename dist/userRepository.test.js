var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MongoClient } from 'mongodb';
import { equal, ok } from 'ptz-assert';
import { User } from 'ptz-user-domain';
import UserRepository from './userRepository';
const MONGO_URL = 'mongodb://localhost:27017/test';
var db, userRepository;
describe('UserRepository', () => {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        db = yield MongoClient.connect(MONGO_URL);
        userRepository = new UserRepository(db);
    }));
    describe('save', () => {
        it('insert', () => __awaiter(this, void 0, void 0, function* () {
            const user = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            });
            yield userRepository.save(user);
            const userDb = yield userRepository.getById(user.id);
            ok(userDb);
            equal(userDb.id, user.id);
            equal(userDb.displayName, user.displayName);
            equal(userDb.email, user.email);
            equal(userDb.userName, user.userName);
        }));
        it('update');
    });
    describe('find', () => {
        it('limit by 3');
        it('limit by 5');
    });
    describe('getOtherUsersWithSameUserNameOrEmail', () => {
        it('find by email');
        it('find by userName');
        it('not found');
    });
    describe('getByUserNameOrEmail', () => {
        it('find by email');
        it('find by userName');
        it('not found');
    });
});
//# sourceMappingURL=userRepository.test.js.map