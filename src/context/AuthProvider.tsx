import React, { createContext, useContext, useState } from 'react';

interface TreatmentContextType {
    user: User | null;
    setUser: (user: User) => void;
}

export const AuthContext = createContext<TreatmentContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');

    return context;
};

export { AuthProvider, useAuth };
