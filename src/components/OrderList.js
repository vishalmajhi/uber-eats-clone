// OrderList.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OrderList = ({ order }) => {
  const { id, status, createdAt, Restaurant, User } = order;

  const getStatusColor = (status) => {
    switch (status) {
      case 'NEW':
        return '#00cc00'; // Green color for "NEW" status
      default:
        return '#000000'; // Default color for other statuses
    }
  };

  return (
    <View style={[styles.container, { borderColor: getStatusColor(status) }]}>
      <Text style={[styles.title, { color: getStatusColor(status) }]}>Order ID: {id}</Text>
      <Text style={[styles.status, { color: getStatusColor(status) }]}>Status: {status}</Text>
      <Text style={styles.createdAt}>Created At: {createdAt}</Text>

      {/* Display restaurant information */}
      <Text style={styles.subtitle}>Restaurant: {Restaurant.name}</Text>
      <Image source={{ uri: Restaurant.image }} style={styles.image} />
      <Text style={styles.deliveryFee}>Delivery Fee: {Restaurant.deliveryFee}</Text>

      {/* Display user information */}
      <Text style={styles.subtitle}>User: {User.name}</Text>
      <Text style={styles.userAddress}>User Address: {User.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    margin: 8,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  createdAt: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  deliveryFee: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  userAddress: {
    fontSize: 14,
    color: '#666666',
  },
});

export default OrderList;
