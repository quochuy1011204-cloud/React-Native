
import React, { useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default function ActionButton({
  onPress,
  completed,
}) {
  const scale = useRef(
    new Animated.Value(1)
  ).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 0.92,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();

    onPress();
  };

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
        marginHorizontal: 25,
        marginTop: 15,
      }}
    >
      <TouchableOpacity
        style={[
          styles.button,
          completed && styles.resetButton,
        ]}
        onPress={handlePress}
        activeOpacity={0.85}
      >
        <Text style={styles.icon}>
          {completed ? '🔄' : '⚡'}
        </Text>

        <Text style={styles.buttonText}>
          {completed
            ? 'HỌC LẠI TỪ ĐẦU'
            : 'TIẾP TỤC THỬ THÁCH'}
        </Text>

        <Text style={styles.subText}>
          {completed
            ? 'Chinh phục mục tiêu lần nữa!'
            : 'Nhấn để tăng tiến độ học tập'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5267C5',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 5,
    borderBottomWidth: 5,
    borderBottomColor: '#354A9A',
  },
  resetButton: {
    backgroundColor: '#20B486',
    borderBottomColor: '#138565',
  },
  icon: {
    fontSize: 27,
    marginBottom: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  subText: {
    color: '#E2E7FF',
    fontSize: 12,
    marginTop: 6,
  },
});
