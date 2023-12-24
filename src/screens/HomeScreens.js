import React from 'react'
import { StatusBar, FlatList, StyleSheet, Text, View } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import Restoreniteam from '../components/Restoreniteam';
export default function HomeScreens() {
  return (
 
<View style={styles.container}>
  
  <FlatList
    data={restaurants}
    keyExtractor={(item) => item.id.toString()} 
    renderItem={({ item }) => <Restoreniteam restaurant={item} />}
    // contentContainerStyle={styles.flatListContainer}
    showsVerticalScrollIndicator={false}
  />
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
      padding:5
    },
  
  });

   


