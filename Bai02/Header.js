
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.logo}>FASHION STORE</Text>
        <Text style={styles.subtitle}>
          BEAUTY • STYLE • CONFIDENCE
        </Text>
      </View>
      <Text style={styles.cart}>🛍️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F5E1E5',
  },
  logo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#18243D',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#D66C8C',
    fontSize: 10,
    marginTop: 5,
    letterSpacing: 2,
  },
  cart: {
    fontSize: 27,
  },
});
