import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreens from '../screens/HomeScreens';
import Restorenitean from '../screens/RestaurantDetail';
import DetailDish from '../screens/DetailDish';
import Order from '../screens/OrderScreens/Order';
import Basket from '../components/Basket';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-basket" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Order}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header:false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
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
       <Stack.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreens" component={HomeScreens} />
      <HomeStack.Screen name="ResturentDetail" component={DetailDish} />
      {/* Add other screens as needed */}
    </HomeStack.Navigator>
  );
};











export default RootNavigator;
