import { composeGroupChatName } from './composeGroupChatName';

interface IGetChatName {
    userId: string;
    userInfos: UserChatInfo[];
}

export const getChatName = ({ userInfos, userId }: IGetChatName) => {
    const filteredUserInfos = userInfos.filter(pair => pair.id !== userId);
    let formattedChatName = '';

    if (userInfos.length === 2) {
        formattedChatName = filteredUserInfos[0].displayName;
    }
    if (userInfos.length > 2) {
        const userNames = filteredUserInfos.map(u => u.displayName);
        formattedChatName = composeGroupChatName(userNames);
    }
    return formattedChatName;
};
