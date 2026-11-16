
import React from 'react';
import { View, Text } from 'react-native';

export default function BottomMenu() {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingVertical: 18,
      borderTopWidth: 1,
      borderTopColor: '#E5E1EC'
    }}>
      <Text style={{ color: '#75669B', fontWeight: 'bold' }}>
        🏠 Trang chủ
      </Text>

      <Text style={{ color: '#75669B', fontWeight: 'bold' }}>
        📚 Khóa học
      </Text>

      <Text style={{ color: '#75669B', fontWeight: 'bold' }}>
        🔔 Thông báo
      </Text>

      <Text style={{ color: '#75669B', fontWeight: 'bold' }}>
        👤 Cá nhân
      </Text>
    </View>
  );
}
