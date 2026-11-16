
import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <View>
      <Header />
      <Home />
      <Main />
      <Footer />
    </View>
  );
}
