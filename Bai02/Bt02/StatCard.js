
import React from 'react';
import { View, Text } from 'react-native';

export default function StatCard() {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: 15,
      gap: 8
    }}>

      <View style={{
        backgroundColor: '#7C4DFF',
        padding: 15,
        borderRadius: 15,
        flex: 1,
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 26}}>📚</Text>
        <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>05</Text>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Khóa học</Text>
      </View>

      <View style={{
        backgroundColor: '#00BFA6',
        padding: 15,
        borderRadius: 15,
        flex: 1,
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 26}}>✏️</Text>
        <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>03</Text>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Đang học</Text>
      </View>

      <View style={{
        backgroundColor: '#FF9800',
        padding: 15,
        borderRadius: 15,
        flex: 1,
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 26}}>🏆</Text>
        <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>02</Text>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Hoàn thành</Text>
      </View>

    </View>
  );
}
