import firestore from '@react-native-firebase/firestore';

export const fetchAllUsers = async () => {
    const querySnapshot = await firestore().collection('users').get();

    const users: User[] = [];
    querySnapshot.forEach(snapshot => {
        const { avatarURL, createdAt, displayName } = snapshot.data();
        users.push({
            id: snapshot.id,
            avatarURL,
            createdAt: createdAt.toDate(),
            displayName,
        });
    });
    return users;
};
