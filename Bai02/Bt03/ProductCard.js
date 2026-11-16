
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        {product.price}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    margin: 8,
    borderRadius: 12,
    width: 165,
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 130,
    borderRadius: 8,
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333333',
  },

  price: {
    color: '#E53935',
    fontWeight: 'bold',
    marginTop: 5,
  },

  description: {
    color: '#666666',
    fontSize: 12,
    marginTop: 5,
  },
});
