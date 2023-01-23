import { MD5 } from 'crypto-js';

export const generateChatHash = (userIds: string[]) => {
    const sortedIds = userIds.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });

    const reducedIds = sortedIds.reduce((acc, id) => (acc += id));

    return MD5(reducedIds).toString();
};
