
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Áo thun',
    price: '150.000đ',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
  },
  {
    id: '2',
    name: 'Áo sơ mi',
    price: '250.000đ',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600',
  },
  {
    id: '3',
    name: 'Quần jean',
    price: '350.000đ',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600',
  },
  {
    id: '4',
    name: 'Áo khoác',
    price: '450.000đ',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
  },
  
  {
    id: '5',
    name: 'Áo hoodie',
    price: '320.000đ',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
  },
  {
    id: '6',
    name: 'Áo len',
    price: '280.000đ',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600',
  },
  {
    id: '7',
    name: 'Áo cardigan',
    price: '300.000đ',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600',
  },
  {
    id: '8',
    name: 'Áo vest',
    price: '550.000đ',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600',
  },
  {
    id: '9',
    name: 'Quần short',
    price: '180.000đ',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600',
  },
];

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SẢN PHẨM NỔI BẬT
      </Text>

      <Text style={styles.subtitle}>
        Khám phá bộ sưu tập thời trang mới nhất
      </Text>

      <View style={styles.grid}>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              {item.price}
            </Text>

            <View style={styles.button}>
              <Text style={styles.buttonText}>
                + Thêm vào giỏ
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#18243D',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 9,
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 155,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#18243D',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: '#D65F85',
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#18243D',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
