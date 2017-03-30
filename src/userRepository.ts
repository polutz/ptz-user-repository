import { IUser, IUserRepository } from 'ptz-core-domain';
import { BaseRepository } from 'ptz-core-repository';

export default class UserRepository extends BaseRepository<IUser> implements IUserRepository {

    constructor(db) {
        const collectionName = 'users';
        super(db, collectionName);
    }

    getOtherUsersWithSameUserNameOrEmail(user: IUser): Promise<IUser[]> {
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

    getByUserNameOrEmail(userNameOrEmail: string): Promise<IUser> {
        const query = {
            $or: [{ email: userNameOrEmail },
            { userName: userNameOrEmail }]
        };

        return this.getDbCollection()
            .findOne(query);
    }
}
