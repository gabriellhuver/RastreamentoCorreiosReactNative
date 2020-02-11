import React, { useEffect } from 'react';
import Home from './src/components/Home'
import { enableScreens } from 'react-native-screens';
import Store from './src/util/Store'
enableScreens();

export default function App() {
  return <Home></Home>
}

