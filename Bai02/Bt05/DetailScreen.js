
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          {product.price}
        </Text>

        <Text style={styles.label}>
          Mô tả sản phẩm
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            ← QUAY LẠI
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1EB',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 320,
    borderRadius: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginTop: 18,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#292929',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B77935',
    marginTop: 12,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    color: '#292929',
  },
  description: {
    color: '#777777',
    fontSize: 15,
    marginTop: 10,
    lineHeight: 23,
  },
  button: {
    backgroundColor: '#292929',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
