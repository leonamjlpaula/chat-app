import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { createUser } from '@app/api/creatUser';
import { CircleLogo } from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { Input } from '@app/designSystem';
import { AuthStackParamList } from '@app/navigators/AuthStack';
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
    Container,
    HStack,
    LinkText,
    LoadingIndicator,
    LoginButton,
    LoginButtonText,
    Spacer,
} from './styles';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUp = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { setUser } = useAuth();

    const handleSignUp = async () => {
        if (name.length < 2) {
            Alert.alert('Error', 'name must have at least 2 characters');
            return;
        }

        try {
            setIsLoading(true);
            const result = await auth().createUserWithEmailAndPassword(
                email,
                password,
            );
            const user = await createUser({
                id: result.user.uid,
                displayName: name,
                email,
            });
            setUser(user);
        } catch ({ code }) {
            Alert.alert('Account creation failed', code as string);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Container>
                <CircleLogo size={100} />
                <Spacer size={100} />
                <Input
                    value={email}
                    onChangeText={setEmail}
                    leftIcon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                />
                <Spacer />
                <Input
                    value={name}
                    onChangeText={setName}
                    leftIcon="account"
                    placeholder="Full name"
                    autoCapitalize="words"
                />
                <Spacer />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    leftIcon="form-textbox-password"
                    secureTextEntry={!showPassword}
                    rightIcon={showPassword ? 'eye-off' : 'eye'}
                    onRightIconPress={() => setShowPassword(prev => !prev)}
                    autoCapitalize="none"
                    textContentType="password"
                />
                <Spacer size={32} />
                <LoginButton onPress={handleSignUp} disabled={isLoading}>
                    <HStack>
                        {isLoading && <LoadingIndicator size={12} />}
                        <LoginButtonText>
                            Create account and log in
                        </LoginButtonText>
                    </HStack>
                </LoginButton>
                <Spacer />
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <LinkText>Already have an account? Sign in</LinkText>
                </TouchableOpacity>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
