import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library you prefer
import restaurants from '../../assets/data/restaurants.json';

const DetailDish = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addToCard = () => {
    // Implement logic to add the item to the cart
    console.log(`Added ${counter} ${restaurants[0].dishes[0].name}(s) to the cart!`);
  };

  const dish = restaurants[1].dishes[0];

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurants[0].image }} style={styles.image} />
      <Text style={styles.dishName}>{dish.name}</Text>
      <Text style={styles.dishDescription}>{dish.description}</Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={decrementCounter} style={styles.counterButton}>
          <Icon name="minus" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableOpacity onPress={incrementCounter} style={styles.counterButton}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={addToCard} style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Set a background color if needed
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  dishName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333', // Dark text color
  },
  dishDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666', // Medium text color
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterButton: {
    backgroundColor: 'black', 
    borderRadius: 20,
    padding: 12,
    marginHorizontal: 10,
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: 'black', 
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width:400,
    marginTop:"auto",
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  addToCartButtonText: {
    color: '#fff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailDish;
