import { NavigationContainer } from "@react-navigation/native"
import LoggedInStack from './LoggedInStack';
import LoggedOutStack from './LoggedOutStack';
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';


export default function RootNavigation() {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            setUser(user);
            if (initializing) setInitializing(false);
        });
        return unsubscribe;
        }, [initializing]);
    
        if (initializing) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {user ? <LoggedInStack /> : <LoggedOutStack />}
        </NavigationContainer>
    );
}