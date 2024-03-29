import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { CircleLogo } from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { Input } from '@app/designSystem';
import { AuthStackParamList } from '@app/navigators/AuthStack';
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

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignIn = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { signIn } = useAuth();

    const handleSignIn = async () => {
        try {
            setIsLoading(true);
            await signIn({ email, password });
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
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Don't have an account? Sign up</LinkText>
                </TouchableOpacity>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
