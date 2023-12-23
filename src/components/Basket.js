// Basket.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';

const BasketItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text>{item.quantity}</Text>
        <Text>Name: {item.name}</Text>
        <Text style={styles.cost}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.cancelbutton}>
        <Text style={styles.cancelbuttonText}>cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const Basket = () => {
  const restaurant = restaurants[0]; // Assuming you want details for the first restaurant
  const items = restaurant.dishes; // Assuming 'dishes' is an array inside the restaurant object

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>Your items</Text>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <BasketItem item={item} />}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {

  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#032030',
    padding: 16,
    borderRadius: 8,
    width:350,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cost: {
    fontWeight: 'bold',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
});

export default Basket;
