import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import DetailList from '../components/DetailList';
import { useNavigation } from '@react-navigation/native';

const RestaurantDetail = () => {
  const navigation = useNavigation();
  const firstRestaurant = restaurants[0];

  const handleBackPress = () => {
    navigation.navigate("HomeScreens"); // Navigate back to the previous screen
  };

  return (
    <View style={styles.page}>
      <Image source={{ uri: firstRestaurant.image }} style={styles.image} />
      <Pressable style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </Pressable>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{firstRestaurant.name}</Text>
        <Text style={styles.subtitle}>
          Only on ${firstRestaurant.deliveryFee} - {firstRestaurant.minDeliveryTime}-{firstRestaurant.maxDeliveryTime} min
        </Text>
      </View>
      <Text style={styles.manutext}>Menu</Text>
      <FlatList
        data={firstRestaurant.dishes}
        renderItem={({ item }) => <DetailList dish={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.dishCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 50,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  dishCard: {
    flex: 1,
    margin: 10,
  },
  manutext: {
    fontSize: 18,
  },
});

export default RestaurantDetail;
