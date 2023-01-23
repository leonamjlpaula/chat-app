const getFirstName = (name: string) => {
    return name.split(' ')[0];
};

export const composeGroupChatName = (displayNames: string[]) => {
    const firstNames = displayNames.map(n => getFirstName(n));
    const sortedNames = firstNames.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });

    if (sortedNames.length === 2) {
        return `${sortedNames[0]}, ${sortedNames[1]}`;
    }

    return `${sortedNames[0]}, ${sortedNames[1]} + ${sortedNames.length - 2}`;
};
