

import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import LoginPage from "./src/screen/Auth/Login";


function App(): React.JSX.Element {
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