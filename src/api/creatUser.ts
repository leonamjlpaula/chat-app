import { generateAvatarURL } from '@app/utils/generateAvatarURL';
import firestore from '@react-native-firebase/firestore';

interface ICreateUser {
    id: string;
    displayName: string;
    email: string;
}

export const createUser = async ({ id, displayName, email }: ICreateUser) => {
    const now = new Date();
    await firestore()
        .collection('users')
        .doc(id)
        .set({
            avatarURL: generateAvatarURL(email),
            createdAt: firestore.Timestamp.fromDate(now),
            displayName,
            email,
        });

    const newUser: User = {
        avatarURL: generateAvatarURL(email),
        createdAt: now,
        displayName,
        email,
        id,
    };

    return newUser;
};
