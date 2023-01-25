import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { fetchUser } from '@app/api/fetchUser';
import { CircleLogo } from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { Input } from '@app/designSystem';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    HStack,
    LinkText,
    LoadingIndicator,
    LoginButton,
    LoginButtonText,
    Spacer,
} from './styles';

const SignIn = () => {
    const [email, setEmail] = useState('leonamjlpaula@gmail.com');
    const [password, setPassword] = useState('123456');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { navigate } = useNavigation();
    const { setUser } = useAuth();

    const handleSignIn = async () => {
        try {
            setIsLoading(true);
            const result = await auth().signInWithEmailAndPassword(
                email,
                password,
            );
            const user = await fetchUser(result.user.uid);
            setUser(user);
        } catch ({ code }) {
            Alert.alert('Login failed', code as string);
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
                <LoginButton onPress={handleSignIn} disabled={isLoading}>
                    <HStack>
                        {isLoading && <LoadingIndicator size={12} />}
                        <LoginButtonText>Sign in</LoginButtonText>
                    </HStack>
                </LoginButton>
                <Spacer />
                <TouchableOpacity onPress={() => navigate('SignUp')}>
                    <LinkText>Don't have an account? Sign up</LinkText>
                </TouchableOpacity>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
