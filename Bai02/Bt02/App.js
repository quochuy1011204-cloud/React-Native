
import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './components/Header';
import StatCard from './components/StatCard';
import CourseCard from './components/CourseCard';
import BottomMenu from './components/BottomMenu';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F3F0FF' }}>
      <ScrollView>
        <Header />
        <StatCard />
        <CourseCard />
      </ScrollView>
      <BottomMenu />
    </View>
  );
}
