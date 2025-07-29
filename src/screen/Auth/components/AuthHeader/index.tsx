import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../style';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constants/screens';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoggedOutStackType} from '../../../../navigation/types';

interface IAuthHeader {
    activeTab: 'login' | 'registration';
}
export default function AuthHeader({ activeTab }: IAuthHeader) {
    const navigation = useNavigation<StackNavigationProp<LoggedOutStackType>>();
    const navigateToLogin = () => {
        navigation.navigate(ScreenNames.LOGIN_PAGE);
    }
    const navigateToRegistration = () => {
        navigation.navigate(ScreenNames.REGISTRATION_PAGE);
    }
    return (
        <>
        <View style={[styles.titleContainer]}>
            <Text style={styles.title}>Раді тебе вітати!</Text>
            <Text style={styles.welcomeText}>
            Кожен пухнастик заслуговує на дбайливих господарів.{'\n'}Ми допоможемо
            тобі знайти друга.
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={navigateToLogin}
                style={activeTab === 'login' ? styles.activeTab : styles.disabledTab}>
                <Text style={styles.authText}>Вхід</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigateToRegistration}
                style={
                    activeTab === 'registration' ? styles.activeTab : styles.disabledTab
                }>
                <Text style={styles.authText}>Реєстрація</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}