import React from 'react';
import { StatusBar, FlatList, StyleSheet, Text, View } from 'react-native';
import restaurants from './assets/data/restaurants.json';
import Restoreniteam from './src/components/Restoreniteam';
import HomeScreens from './src/screens/HomeScreens';
import RestaurantDetail from './src/screens/RestaurantDetail';
import DetailDish from './src/screens/DetailDish';
import Basket from './src/components/Basket';
import OrderScreen from './src/screens/OrderScreens/Order';
export default function App() {
  return (
<View style={styles.container}>
{/* <HomeScreens/> */}
{/* <RestaurantDetail/> */}
{/* <DetailDish/> */}
{/* <Basket/> */}
<OrderScreen/>
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
