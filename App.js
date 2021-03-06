import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StatusBar,
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View, 
  Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{padding: 16, backgroundColor: "green"}}>
          <Text>search</Text>
        </View>
        <View style={{flex: 1, padding: 16, backgroundColor: "blue"}}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
