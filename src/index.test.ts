import { ok } from 'ptz-assert';
import { UserRepository } from './index';

describe('ptz-user-repository', () => {
    describe('exports', () => {
        it('UserRepository', () => ok(UserRepository));
    });
});
