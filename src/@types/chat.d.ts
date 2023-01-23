interface Chat {
    id: string;
    users: string[];
    chatName: string;
    avatars: UserAvatarPair[];
    lastMessage: string;
    createdAt: Date | FirebaseFirestoreTypes.Timestamp;
    updatedAt: Date | FirebaseFirestoreTypes.Timestamp;
    hash: string;
}
