
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

export default function AnimatedMessage({ visible }) {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[
      styles.box,
      { transform: [{ scale }] }
    ]}>
      <Text style={styles.text}>🎉 CHÚC MỪNG!</Text>
      <Text style={styles.sub}>
        Bạn đã hoàn thành mục tiêu học tập!
      </Text>
      <Text style={styles.icon}>🏆👏🌟</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#E2F7E9',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  text: {
    color: '#229954',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sub: {
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {
    fontSize: 30,
    marginTop: 10,
  },
});
