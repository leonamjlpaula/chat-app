import firestore from '@react-native-firebase/firestore';

interface IPushNewMessage {
    content: string;
    user: User;
    chatId: string;
}

export const pushNewMessage = async ({
    content,
    user,
    chatId,
}: IPushNewMessage) => {
    const newMessage = {
        avatarURL: user.avatarURL,
        content,
        createdAt: firestore.Timestamp.now(),
        displayName: user.displayName,
        user: user.id,
    };

    await firestore()
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(newMessage);
};
