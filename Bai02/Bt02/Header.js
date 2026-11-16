
import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{
      backgroundColor: '#6C63FF',
      padding: 25,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25
    }}>
      <Text style={{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
      }}>
        xin chào
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 16,
        marginTop: 12
      }}>
        Xin chao: Nguyen Quoc Huy
      </Text>

      <Text style={{
        color: '#FFE082',
        fontSize: 15,
        marginTop: 5
      }}>
        Ma sinh vien: CD-CNTT18A16
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 15,
        marginTop: 5
      }}>
        Lop: CD-CNTT18A
      </Text>
    </View>
  );
}
