import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import {identity, reverseArray} from 'genericlibrary.ts';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text>HELLO!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
