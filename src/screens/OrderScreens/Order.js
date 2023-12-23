// Order.js
import React from 'react';
import { FlatList } from 'react-native';
import OrderList from '../../components/OrderList';
import orders from '../../../assets/data/orders.json';

const Order = () => {
  return (
    <FlatList 
      data={orders}
      renderItem={({ item }) => <OrderList order={item} />} // Pass the 'item' as 'order' prop
    />
  );
};

export default Order;
