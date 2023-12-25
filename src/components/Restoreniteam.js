import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Restoreniteam = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
  
    navigation.navigate('Restorenitean'); // Pass the correct screen name here
  };
  return (
    <Pressable  onPress={onPress}  style={styles.restaurantContainer}>
    <Image source={{ uri: restaurant.image }} style={styles.image} />
   
    <View style={styles.row}>
    <View>
    <Text style={styles.title}>{restaurant.name}</Text>
    <Text style={styles.subtitle}> only on{restaurant.deliveryFee}${restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min</Text>

    </View>
    <View style={styles.rating}>
<Text style={styles.ratingtext}>{restaurant.rating}</Text>

    </View>
    </View>
  </Pressable>
  );
};

export default Restoreniteam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
  },
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  
  },
  row:{
  flexDirection:"row",
  alignItems:"center",

  },
  rating:{
marginLeft:"auto"
  },
  ratingtext:{
   color:"white",
   backgroundColor:"black",
   width:25,
   height:20,
   alignItems:"center",
   justifyContent:"center",
   borderRadius: 5,
      }
});
