
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View>
      <View style={styles.menu}>
        <Text style={styles.menuItem}>⌂Trang chủ</Text>
        <Text style={styles.menuItem}>▤Sản phẩm</Text>
        <Text style={styles.menuItem}>🛒Giỏ hàng</Text>
        <Text style={styles.menuItem}>♙Cá nhân</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.logo}>FASHION STORE</Text>
        <Text style={styles.thanks}>
          CẢM ƠN QUÝ KHÁCH ĐÃ GHÉ THĂM!
        </Text>
        <Text style={styles.text}>
          Thời trang đẹp – Tự tin tỏa sáng.
        </Text>
        <Text style={styles.text}>
          Mọi thắc mắc xin liên hệ:
        </Text>
        <Text style={styles.phone}>
          ☎ 0337774332
        </Text>
        <Text style={styles.text}>
          Hẹn gặp lại quý khách!
        </Text>
        <Text style={styles.copy}>
          © 2026 FASHION STORE
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0DDE3',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuItem: {
    textAlign: 'center',
    color: '#18243D',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  footer: {
    backgroundColor: '#18243D',
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    color: '#F6B7CC',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  thanks: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 18,
    fontSize: 13,
  },
  text: {
    color: '#D9DCE5',
    fontSize: 12,
    marginTop: 9,
  },
  phone: {
    color: '#F6B7CC',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
  },
  copy: {
    color: '#AEB5C5',
    fontSize: 10,
    marginTop: 20,
  },
});
