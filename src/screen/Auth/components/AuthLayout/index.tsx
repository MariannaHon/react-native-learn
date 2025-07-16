import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import styles from '../../style';
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={[styles.mainWrapper]}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}