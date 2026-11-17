
import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, Animated
} from 'react-native';

import ProgressCard from './components/ProgressCard';
import ActionButton from './components/ActionButton';
import AnimatedMessage from './components/AnimatedMessage';

export default function App() {
  const [selected, setSelected] = useState([]);
  const [progress, setProgress] = useState(0);
  const anim = useRef(new Animated.Value(0)).current;

  const lessons = ['JavaScript cơ bản', 'React Native'];
  const completed = progress === 100;

  const start = () => {
    if (!selected.length) return;

    const value = completed ? 0 : progress + 25;
    setProgress(value);

    Animated.timing(anim, {
      toValue: value,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  const toggle = (id) => {
    setSelected(old =>
      old.includes(id) ? old.filter(x => x !== id) : [...old, id]
    );
    setProgress(0);
    anim.setValue(0);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📚 STUDY GOAL</Text>
        <Text style={styles.sub}>Chinh phục mục tiêu mỗi ngày</Text>
      </View>

      <Text style={styles.heading}>📖 CHỌN BÀI HỌC</Text>

      {lessons.map((name, id) => (
        <TouchableOpacity
          key={id}
          style={[styles.lesson, selected.includes(id) && styles.active]}
          onPress={() => toggle(id)}
        >
          <Text style={styles.name}>{name}</Text>
          <Text>{selected.includes(id) ? '☑️' : '⬜'}</Text>
        </TouchableOpacity>
      ))}

      <ProgressCard progress={progress} progressAnim={anim} />

      <Text style={styles.count}>Tiến độ: {progress}%</Text>

      <ActionButton onPress={start} completed={completed} />
      <AnimatedMessage visible={completed} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F3FA' },
  header: {
    backgroundColor: '#5267C5', padding: 25,
    borderBottomLeftRadius: 25, borderBottomRightRadius: 25
  },
  title: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  sub: { color: '#FFF', marginTop: 8 },
  heading: { color: '#5267C5', fontSize: 18, fontWeight: 'bold', margin: 18 },
  lesson: {
    backgroundColor: '#FFF', marginHorizontal: 15,
    marginBottom: 10, padding: 17, borderRadius: 12,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  active: { backgroundColor: '#E2E8FF', borderWidth: 1, borderColor: '#5267C5' },
  name: { fontWeight: 'bold', color: '#333' },
  count: { textAlign: 'center', color: '#5267C5', fontWeight: 'bold', margin: 10 }
});
