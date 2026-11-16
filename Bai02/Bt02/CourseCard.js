
import React from 'react';
import { View, Text } from 'react-native';

export default function CourseCard() {
  const courses = [
    { icon: '💻', name: 'Lập trình JavaScript', teacher: 'Nguyễn Văn A', color: '#8E80B8', progress: '80%' },
    { icon: '📱', name: 'React Native', teacher: 'Trần Văn B', color: '#649E91', progress: '65%' },
    { icon: '🗄️', name: 'Cơ sở dữ liệu', teacher: 'Lê Văn C', color: '#C49A68', progress: '50%' },
    { icon: '🌐', name: 'Thiết kế Web', teacher: 'Phạm Văn D', color: '#B77D91', progress: '90%' },
  ];

  return (
    <View style={{ margin: 15 }}>
      {courses.map((item, index) => (
        <View key={index} style={{
          backgroundColor: '#FFFFFF',
          padding: 16,
          borderRadius: 14,
          marginBottom: 12,
          borderWidth: 1,
          borderColor: '#E8E5EF',
          borderLeftWidth: 4,
          borderLeftColor: item.color
        }}>
          <Text style={{ fontSize: 22 }}>{item.icon}</Text>

          <Text style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#393545',
            marginTop: 5
          }}>
            {item.name}
          </Text>

          <Text style={{ color: '#777482', marginTop: 5 }}>
            Giảng viên: {item.teacher}
          </Text>

          <Text style={{
            color: item.color,
            marginTop: 8,
            fontWeight: 'bold'
          }}>
            Tiến độ: {item.progress}
          </Text>
        </View>
      ))}
    </View>
  );
}
