function UserRepository(db): IUserRepository {

    function getUserDbCollection() {
        return db.collection('users');
    }

    async function save(user: IUser): Promise<IUser> {
        var result = await getUserDbCollection()
            .replaceOne({ _id: user.id }, user, { upsert: true });
        user = result.ops[0];
        return Promise.resolve(user);
    }

    function getByIds(ids: string[]): Promise<IUser[]> {
        var query = {
            _id: {
                $in: ids
            }
        };

        return getUserDbCollection()
            .find(query)
            .toArray();
    }

    function find(query: any, options: { limit: number }): Promise<IUser[]> {
        var result = getUserDbCollection()
            .find(query, {}, options)
            .toArray();

        return result;
    }

    function getOtherUsersWithSameUserNameOrEmail(user: IUser): Promise<IUser[]> {
        var query = {
            _id: { $ne: user.id },
            $or: [
                { email: user.email },
                { userName: user.userName }
            ]
        };

        var select = {
            userName: 1,
            email: 1 
        };

        return getUserDbCollection()
            .find(query, select)
            .toArray();
    }

    function getByUserNameOrEmail(userNameOrEmail: string): Promise<IUser> {
        var query = {
            $or: [{ email: userNameOrEmail },
            { userName: userNameOrEmail }]
        };

        return getUserDbCollection()
            .findOne(query);
    }


    return {
        save,
        find,
        getByUserNameOrEmail,
        getByIds,
        getOtherUsersWithSameUserNameOrEmail
    }
}

export default UserRepository;
