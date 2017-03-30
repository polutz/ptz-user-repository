import { MongoClient } from 'mongodb';
import { equal, ok } from 'ptz-assert';
import { User } from 'ptz-user-domain';
import UserRepository from './userRepository';

const MONGO_URL = 'mongodb://localhost:27017/test';
var db, userRepository;

describe('UserRepository', () => {
    beforeEach(async () => {
        db = await MongoClient.connect(MONGO_URL);
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
