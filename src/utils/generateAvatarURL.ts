export const generateAvatarURL = (email: string) => {
    return `https://api.dicebear.com/5.x/bottts-neutral/png?seed=${email}`;
};
