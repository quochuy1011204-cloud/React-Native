
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.tag}>NEW COLLECTION 2026</Text>

        <Text style={styles.title}>
          THỜI TRANG
        </Text>
        <Text style={styles.title2}>
          PHONG CÁCH CỦA BẠN
        </Text>

        <Text style={styles.description}>
          Khám phá phong cách mới mỗi ngày.
          Tự tin thể hiện cá tính của bạn!
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            MUA SẮM NGAY →
          </Text>
        </View>

        <Text style={styles.image}>👗 👚 👜</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  banner: {
    backgroundColor: '#F9DCE5',
    padding: 22,
    borderRadius: 22,
  },
  tag: {
    color: '#B64E72',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#18243D',
    marginTop: 15,
  },
  title2: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#C65D80',
  },
  description: {
    fontSize: 14,
    color: '#555555',
    marginTop: 12,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#18243D',
    padding: 13,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginTop: 17,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    fontSize: 38,
    marginTop: 17,
    textAlign: 'center',
  },
});
