interface Chat {
    id: string;
    users: string[];
    chatName: string;
    userInfos: UserChatInfo[];
    lastMessage: string;
    createdAt: Date;
    updatedAt: Date;
    hash: string;
}
