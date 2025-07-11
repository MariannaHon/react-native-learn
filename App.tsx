

import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import LoginPage from "./src/screen/Auth/Login";
import { useEffect } from "react";
import { DevSettings, NativeModules } from 'react-native';


function App(): React.JSX.Element {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
      DevSettings.addMenuItem('Stop Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(false);
      });
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <LoginPage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",  
  },
});

export default App;