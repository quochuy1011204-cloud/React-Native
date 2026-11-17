
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FASHION STORE</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800'
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        THỜI TRANG CỦA BẠN
      </Text>

      <Text style={styles.description}>
        Khám phá phong cách mới.
        Mặc đẹp mỗi ngày cùng chúng tôi!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          KHÁM PHÁ SẢN PHẨM →
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#292929',
    marginBottom: 25,
    letterSpacing: 2,
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#292929',
  },
  description: {
    fontSize: 15,
    color: '#777777',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#292929',
    padding: 16,
    borderRadius: 10,
    marginTop: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
