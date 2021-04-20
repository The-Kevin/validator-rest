import {create} from '../../src/modules/user/controllers/user.controller'

describe('test unitary to create controller function', () => {

    test('test function self', () => {
        expect(create).not.toBeNull();
        expect(create).not.toBeUndefined();
        expect(create).not.toBeFalsy();
    });

})