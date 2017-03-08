declare module ptzUserRepository {
    export function UserRepository(db):IUserRepository;
}

declare module "ptz-user-repository"
{
    export = ptzUserRepository;
}