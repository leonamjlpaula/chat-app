import firestore from '@react-native-firebase/firestore';

interface IUpdateLastMessage {
    lastMessage: string;
    chatId: string;
}

export const updateLastMessage = async ({
    lastMessage,
    chatId,
}: IUpdateLastMessage) => {
    await firestore().collection('chats').doc(chatId).update({
        updatedAt: firestore.Timestamp.now(),
        lastMessage,
    });
};
