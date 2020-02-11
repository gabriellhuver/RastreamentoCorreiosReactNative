import React from 'react'
import Rastrear from '../Rastrear'
import Rastreios from '../Rastreios'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

const RastrearIcon = <Icon name="search" size={24} color="gray" />;
const RastreiosIcon = <Icon name="list-alt" size={24} color="gray" />;

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Rastreios">
        <Tab.Screen name="Rastrear" options={{
          tabBarIcon: ({ color, size }) => (
            RastrearIcon
          ),
        }} component={Rastrear} />
        <Tab.Screen name="Rastreios" options={{
          tabBarIcon: ({ color, size }) => (
            RastreiosIcon
          ),
        }} component={Rastreios} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}