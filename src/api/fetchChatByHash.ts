import firestore from '@react-native-firebase/firestore';

export const fetchChatByHash = async (hash: string): Promise<Chat | null> => {
    const querySnapshot = await firestore()
        .collection('chats')
        .where('hash', '==', hash)
        .get();

    if (querySnapshot.empty) {
        return null;
    }
    const { users, chatName, avatars, lastMessage, createdAt, updatedAt } =
        querySnapshot.docs[0].data();
    return {
        id: querySnapshot.docs[0].id,
        users,
        chatName,
        avatars,
        lastMessage,
        createdAt,
        updatedAt,
        hash,
    };
};
