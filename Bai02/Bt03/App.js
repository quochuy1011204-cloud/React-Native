
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import ProductCard from './components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Đắc Nhân Tâm',
    price: '75.000đ',
    description: 'Sách kỹ năng sống',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'
  },
  {
    id: '2',
    name: 'Nhà Giả Kim',
    price: '90.000đ',
    description: 'Sách văn học',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400'
  },
  {
    id: '3',
    name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
    price: '85.000đ',
    description: 'Sách phát triển bản thân',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400'
  },
  {
    id: '4',
    name: 'Dám Nghĩ Lớn',
    price: '95.000đ',
    description: 'Sách kinh doanh',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400'
  },
  {
    id: '5',
    name: 'Cà Phê Cùng Tony',
    price: '80.000đ',
    description: 'Sách kỹ năng',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400'
  },
  {
    id: '6',
    name: 'Tôi Tài Giỏi, Bạn Cũng Thế',
    price: '100.000đ',
    description: 'Sách học tập',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400'
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
  📚 THẾ GIỚI SÁCH
</Text>

<Text style={styles.subtitle}>
  Tri thức mở ra tương lai
</Text>

<Text style={styles.welcome}>
  Chào mừng bạn đến với thư viện sách!
</Text>

<Text style={styles.intro}>
  Khám phá những cuốn sách hay mỗi ngày
</Text>

      <Text style={styles.subtitle}>
        CỬA HÀNG SÁCH
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A4A8A',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 15,
  },

  list: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
