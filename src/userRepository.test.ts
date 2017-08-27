import { emptyArray, equal, notEqual, notOk, ok } from 'ptz-assert';
import { IUserArgs } from 'ptz-user-domain';
import * as Core from './index';

const MONGO_URL = 'mongodb://localhost:27017/ptz-core-repo';
var userRepository;
describe('UserRepository', () => {

    beforeEach(async () => {
        userRepository = await Core.createUserRepository('test-collection', MONGO_URL);
    });
    describe('getOtherUsersWithSameUserNameOrEmail', () => {
        it('find by email', async () => {
            const user: IUserArgs = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };

            const user2: IUserArgs = {
                id: 'testid2',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'gsgdsgsd'
            };

            await userRepository.save(user);

            const userDb = await userRepository.getOtherUsersWithSameUserNameOrEmail(user2);

            equal(userDb[0].email, user2.email);
            notEqual(userDb[0].id, user2.id);
        });

        it('find by userName', async () => {
            const user: IUserArgs = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };

            const user2: IUserArgs = {
                id: 'testid2',
                displayName: 'Angelo',
                email: 'advadvdavad@gmail.com',
                userName: 'angeloocana'
            };
            await userRepository.save(user);

            const userDb = await userRepository.getOtherUsersWithSameUserNameOrEmail(user2);

            equal(userDb[0].userName, user2.userName);
            notEqual(userDb[0].id, user2.id);
        });

        it('not found', async () => {
            const user: IUserArgs = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'dgh3t4hd@gmail.com',
                userName: 'dgh3t4hd'
            };

            const userDb = await userRepository.getOtherUsersWithSameUserNameOrEmail(user);

            emptyArray(userDb);
        });
    });

    describe('getByUserNameOrEmail', () => {
        it('find by email', async () => {
            const user: IUserArgs = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };

            await userRepository.save(user);
            const userDb = await userRepository.getByUserNameOrEmail('angeloocana@gmail.com');

            ok(userDb);
            equal(userDb.id, user.id);
            equal(userDb.displayName, user.displayName);
            equal(userDb.email, user.email);
            equal(userDb.userName, user.userName);
        });

        it('find by userName', async () => {
            const user: IUserArgs = {
                id: 'testid',
                displayName: 'Angelo',
                email: 'angeloocana@gmail.com',
                userName: 'angeloocana'
            };

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
