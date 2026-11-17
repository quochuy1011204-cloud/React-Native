
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default function ProgressCard({
  progress,
  progressAnim,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        🎯 MỤC TIÊU HỌC TẬP
      </Text>

      <Text style={styles.title}>
        Hoàn thành bài tập React Native
      </Text>

      <View style={styles.info}>
        <Text style={styles.label}>
          Tiến độ học tập
        </Text>
        <Text style={styles.percent}>
          {progress}%
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      <Text style={styles.note}>
        Cố gắng mỗi ngày để đạt mục tiêu nhé!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: 15,
    borderRadius: 18,
    elevation: 4,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5267C5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 15,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    color: '#666666',
    fontSize: 14,
  },
  percent: {
    color: '#5267C5',
    fontWeight: 'bold',
    fontSize: 18,
  },
  progressBackground: {
    height: 12,
    backgroundColor: '#E5E9F5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 12,
    backgroundColor: '#5267C5',
    borderRadius: 10,
  },
  note: {
    fontSize: 13,
    color: '#888888',
    marginTop: 15,
  },
});
