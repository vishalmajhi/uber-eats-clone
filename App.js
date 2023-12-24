import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import OrderScreen from './src/screens/OrderScreens/Order';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      
        <RootNavigator />
 
    </NavigationContainer>
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

