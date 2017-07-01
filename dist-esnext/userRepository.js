import { find, getById, getByIds, getDb, getDbCollection, save } from '@alanmarcell/ptz-core-repository';
import R from 'ramda';
export const createUserRepository = R.curry(async (collectionName, url) => {
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
const getOtherUsersWithSameUserNameOrEmail = R.curry((collection, user) => {
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
const getByUserNameOrEmail = R.curry((collection, userNameOrEmail) => {
    const query = {
        $or: [{ email: userNameOrEmail },
            { userName: userNameOrEmail }]
    };
    return collection
        .findOne(query);
});
export { getByUserNameOrEmail, getOtherUsersWithSameUserNameOrEmail };
//# sourceMappingURL=userRepository.js.map