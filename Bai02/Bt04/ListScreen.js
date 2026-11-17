
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Áo thun basic',
    price: '150.000đ',
    description: 'Áo thun cotton mềm mại, trẻ trung.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
  },
  {
    id: '2',
    name: 'Áo khoác thời trang',
    price: '350.000đ',
    description: 'Áo khoác phong cách hiện đại.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
  },
  {
    id: '3',
    name: 'Quần jean',
    price: '280.000đ',
    description: 'Quần jean trẻ trung, dễ phối đồ.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
  },
  {
    id: '4',
    name: 'Áo sơ mi',
    price: '220.000đ',
    description: 'Áo sơ mi thanh lịch, lịch sự.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
  },
  {
    id: '5',
    name: 'Áo len',
    price: '300.000đ',
    description: 'Áo len ấm áp, kiểu dáng đẹp.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500',
  },
  {
    id: '6',
    name: 'Áo khoác denim',
    price: '400.000đ',
    description: 'Áo khoác denim cá tính, năng động.',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500',
  },
];

export default function ListScreen({ navigation }) {
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Detail', { product: item })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.price}>{item.price}</Text>

      <Text style={styles.more}>Xem chi tiết →</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        BỘ SƯU TẬP THỜI TRANG
      </Text>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1EB',
    padding: 10,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#292929',
    textAlign: 'center',
    marginVertical: 15,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 7,
    padding: 10,
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 145,
    borderRadius: 9,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#292929',
    marginTop: 10,
  },
  price: {
    color: '#B77935',
    fontWeight: 'bold',
    marginTop: 6,
  },
  more: {
    color: '#777777',
    fontSize: 12,
    marginTop: 8,
  },
});
