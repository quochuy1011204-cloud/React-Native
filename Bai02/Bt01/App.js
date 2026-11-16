
import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet
} from 'react-native';

import Header from './Header';
import Home from './Home';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Home />
        <Main />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F8',
  },
});
