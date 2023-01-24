import firestore from '@react-native-firebase/firestore';

export const fetchUser = async (id: string) => {
    const snapshot = await firestore().collection('users').doc(id).get();

    const { avatarURL, createdAt, displayName, email } = snapshot.data();

    const newUser: User = {
        id: snapshot.id,
        avatarURL,
        createdAt: createdAt.toDate(),
        displayName,
        email,
    };
    return newUser;
};
