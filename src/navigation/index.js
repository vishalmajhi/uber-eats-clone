import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
import Restorenitean from '../screens/RestaurantDetail';
import DetailDish from '../screens/DetailDish';
import Order from '../screens/OrderScreens/Order';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreens" component={HomeScreens} />
      <Stack.Screen
        name="Restorenitean"
        component={Restorenitean}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailDish"
        component={DetailDish}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
