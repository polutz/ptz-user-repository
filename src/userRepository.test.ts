import UserRepository from './userRepository';
import { MongoClient } from 'mongodb';
import { User } from 'ptz-user-domain';
import {ok, equal} from 'ptz-assert';

const MONGO_URL = 'mongodb://localhost:27017/relay';
var db, userRepository;

describe('UserRepository', () => {
    beforeEach(async () => {
        db = await MongoClient.connect(MONGO_URL);
        userRepository = UserRepository(db);
    });

    describe('save', () => {
        it('insert', async () => {
            var user = new User({
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            });

            await userRepository.save(user);
            var usersDb = await userRepository.getByIds([user.id]);
            var userDb = usersDb[0];

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
