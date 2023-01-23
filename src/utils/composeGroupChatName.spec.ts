import { composeGroupChatName } from './composeGroupChatName';

describe('Test group name generation', () => {
    it('Should return a valid group name for 5 users', () => {
        const input = [
            'Dwight Schrute',
            'Jim Halpert',
            'Kevin Malone',
            'Michael Scott',
            'Pam Beesly',
        ];

        const result = composeGroupChatName(input);

        expect(result).toBe('Dwight, Jim + 3');
    });

    it('Should return a valid group name for 2 users', () => {
        const input = ['Dwight Schrute', 'Kevin Malone'];

        const result = composeGroupChatName(input);

        expect(result).toBe('Dwight, Kevin');
    });
});
