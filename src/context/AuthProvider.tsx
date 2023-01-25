import React, { createContext, useCallback, useContext, useState } from 'react';
import { createUser } from '@app/api/creatUser';
import { fetchUser } from '@app/api/fetchUser';
import auth from '@react-native-firebase/auth';

interface ISignIn {
    email: string;
    password: string;
}
interface ISignUp extends ISignIn {
    displayName: string;
}
interface TreatmentContextType {
    user: User | null;
    setUser: (user: User) => void;
    signIn: (params: ISignIn) => void;
    signUp: (params: ISignUp) => void;
}

export const AuthContext = createContext<TreatmentContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = useCallback(async ({ email, password }: ISignIn) => {
        const result = await auth().signInWithEmailAndPassword(email, password);
        const newUser = await fetchUser(result.user.uid);
        setUser(newUser);
    }, []);

    const signUp = useCallback(
        async ({ email, password, displayName }: ISignUp) => {
            const result = await auth().createUserWithEmailAndPassword(
                email,
                password,
            );
            const newUser = await createUser({
                id: result.user.uid,
                displayName,
                email,
            });
            setUser(newUser);
        },
        [],
    );

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                signIn,
                signUp,
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
