import { ok } from 'ptz-assert';
import * as Core from './index';
describe('ptz-user-repository', () => {
    describe('exports', () => {
        it('getByUserNameOrEmail', () => ok(Core.getByUserNameOrEmail));
        it('getOtherUsersWithSameUserNameOrEmail', () => ok(Core.getOtherUsersWithSameUserNameOrEmail));
    });
});
//# sourceMappingURL=index.test.js.map