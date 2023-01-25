import firestore from '@react-native-firebase/firestore';

interface ICreateChat {
    userIds: string[];
    userInfos: UserChatInfo[];
    chatName: string;
    hash: string;
}

export const createChat = async ({
    chatName,
    hash,
    userIds,
    userInfos,
}: ICreateChat): Promise<Chat> => {
    const newChat = {
        createdAt: firestore.Timestamp.fromDate(new Date()),
        updatedAt: firestore.Timestamp.fromDate(new Date()),
        users: userIds,
        chatName,
        hash,
        userInfos,
        lastMessage: '',
    };

    const result = await firestore().collection('chats').add(newChat);

    return { id: result.id, ...newChat };
};
