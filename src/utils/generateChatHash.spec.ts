import { generateChatHash } from './generateChatHash';

describe('Test chat hash generation', () => {
    it('Should return a valid md5 hash for 2 IDs', () => {
        const input = ['2xm66yuqqQSZn5nAwSyg', 'V60TdufIWeZkmQmmLpqs'];

        const result = generateChatHash(input);

        expect(result).toBe('11efcec74e777fd4ea121dc555a80811');
    });
    it('Should return the same value if unsorted', () => {
        const input = ['V60TdufIWeZkmQmmLpqs', '2xm66yuqqQSZn5nAwSyg'];

        const result = generateChatHash(input);

        expect(result).toBe('11efcec74e777fd4ea121dc555a80811');
    });
});
