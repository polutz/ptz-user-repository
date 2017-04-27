import { MongoClient } from 'mongodb';
import { emptyArray, equal, notEqual, notOk, ok } from 'ptz-assert';
import { User } from 'ptz-user-domain';
import { UserRepository } from './index';
const MONGO_URL = 'mongodb://localhost:27017/test';
var db, userRepository;
describe('UserRepository', () => {
    beforeEach(async () => {
        db = await MongoClient.connect(MONGO_URL + Math.random().toString().replace('.', ''));
        userRepository = new UserRepository(db);
    });
    describe('save', () => {
        it('insert', async () => {
            const user = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            });
            await userRepository.save(user);
            const userDb = await userRepository.getById(user.id);
            ok(userDb);
            equal(userDb.id, user.id);
            equal(userDb.displayName, user.displayName);
            equal(userDb.email, user.email);
            equal(userDb.userName, user.userName);
        });
        it('update');
    });
    describe('getOtherUsersWithSameUserNameOrEmail', () => {
        it('find by email', async () => {
            const user = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            });
            const user2 = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'gsgdsgsd'
            });
            await userRepository.save(user);
            const userDb = await userRepository.getOtherUsersWithSameUserNameOrEmail(user2);
            equal(userDb[0].email, user2.email);
            notEqual(userDb[0].id, user2.id);
        });
        it('find by userName', async () => {
            const user = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            });
            const user2 = new User({
                displayName: 'Angelo',
                email: 'advadvdavad@gmail.com',
                userName: 'angeloocana'
            });
            await userRepository.save(user);
            const userDb = await userRepository.getOtherUsersWithSameUserNameOrEmail(user2);
            equal(userDb[0].userName, user2.userName);
            notEqual(userDb[0].id, user2.id);
        });
        it('not found', async () => {
            const user = new User({
                displayName: 'Angelo',
                email: 'dgh3t4hd@gmail.com',
                userName: 'dgh3t4hd'
            });
            const userDb = await userRepository.getOtherUsersWithSameUserNameOrEmail(user);
            emptyArray(userDb);
        });
    });
    describe('getByUserNameOrEmail', () => {
        it('find by email', async () => {
            const user = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            });
            await userRepository.save(user);
            const userDb = await userRepository.getByUserNameOrEmail('angeloocana@gmail.com');
            ok(userDb);
            equal(userDb.id, user.id);
            equal(userDb.displayName, user.displayName);
            equal(userDb.email, user.email);
            equal(userDb.userName, user.userName);
        });
        it('find by userName', async () => {
            const user = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            });
            await userRepository.save(user);
            const userDb = await userRepository.getByUserNameOrEmail('angeloocana');
            ok(userDb);
            equal(userDb.id, user.id);
            equal(userDb.displayName, user.displayName);
            equal(userDb.email, user.email);
            equal(userDb.userName, user.userName);
        });
        it('not found', async () => {
            const userDb = await userRepository.getByUserNameOrEmail('dgdsfsfbsf');
            notOk(userDb);
        });
    });
});
//# sourceMappingURL=userRepository.test.js.map