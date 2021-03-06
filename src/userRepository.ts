import { Collection } from 'mongodb';
import { find, getById, getByIds, getDb, getDbCollection, save } from 'ptz-core-repository';
import { IUser, IUserArgs, IUserRepository } from 'ptz-user-domain';
import R from 'ramda';

type ICreateRepository = (url: string, collectionName: string) => Promise<IUserRepository>;

export const createUserRepository: ICreateRepository = R.curry(async (url: string, collectionName: string) => {
    const db = await getDb(url);
    const collection = getDbCollection(db, collectionName);
    return {
        db,
        collectionName,
        save: save(collection),
        getByIds: getByIds(collection),
        find: find(collection),
        getById: getById(collection),
        getDbCollection,
        getOtherUsersWithSameUserNameOrEmail: getOtherUsersWithSameUserNameOrEmail(collection),
        getByUserNameOrEmail: getByUserNameOrEmail(collection)
    };
});

const getOtherUsersWithSameUserNameOrEmail = R.curry((collection: Collection, user: IUserArgs): Promise<IUser[]> => {
    const query = {
        _id: { $ne: user.id },
        $or: [
            { email: user.email },
            { userName: user.userName }
        ]
    };

    const select = {
        userName: 1,
        email: 1
    };

    return collection
        .find(query, select)
        .toArray();
});

const getByUserNameOrEmail = R.curry((collection: Collection, userNameOrEmail: string): Promise<IUser> => {
    const query = {
        $or: [{ email: userNameOrEmail },
        { userName: userNameOrEmail }]
    };

    return collection
        .findOne(query);
});

export { getByUserNameOrEmail, getOtherUsersWithSameUserNameOrEmail };
