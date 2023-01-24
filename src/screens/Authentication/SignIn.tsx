/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { CircleLogo } from '@app/components';
import { Input } from '@app/designSystem';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    LinkText,
    LoginButton,
    LoginButtonText,
    Spacer,
} from './styles';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { navigate } = useNavigation();

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Container>
                <CircleLogo size={100} />
                <Spacer size={100} />
                <Input value={email} onChangeText={setEmail} leftIcon="email" />
                <Spacer />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    leftIcon="form-textbox-password"
                    secureTextEntry={showPassword}
                    rightIcon={showPassword ? 'eye' : 'eye-off'}
                    onRightIconPress={() => setShowPassword(prev => !prev)}
                />
                <Spacer size={32} />
                <LoginButton>
                    <LoginButtonText>Sign in</LoginButtonText>
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
