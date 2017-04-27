import { BaseRepository } from 'ptz-core-repository';
export default class UserRepository extends BaseRepository {
    constructor(db) {
        const collectionName = 'users';
        super(db, collectionName);
    }
    getOtherUsersWithSameUserNameOrEmail(user) {
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
        return this.getDbCollection()
            .find(query, select)
            .toArray();
    }
    getByUserNameOrEmail(userNameOrEmail) {
        const query = {
            $or: [{ email: userNameOrEmail },
                { userName: userNameOrEmail }]
        };
        return this.getDbCollection()
            .findOne(query);
    }
}
//# sourceMappingURL=userRepository.js.map