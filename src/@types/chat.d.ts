interface Chat {
    id: string;
    users: string[];
    chatName: string;
    avatars: UserAvatarPair[];
    lastMessage: string;
    createdAt: Date;
    updatedAt: Date;
    hash: string;
}
