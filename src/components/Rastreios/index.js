import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RastreioItemContent, RastreioItemContentText, Container } from './styles'
import { createStackNavigator } from '@react-navigation/stack';
import Rastreio from '../Rastreio'
import Store from '../../util/Store'
import Loading from '../Loading'
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default function Rastreios({ route }) {
  return (
    <Stack.Navigator initialRouteName="Rastreios">
      <Stack.Screen name="Rastreios" component={RastreiosHome} />
      <Stack.Screen name="Rastreio" component={Rastreio} />
    </Stack.Navigator>
  );
  function RastreiosHome() {
    const [rastreios, setRastreios] = useState()
    const [loading, setLoading] = useState('loading')
    useEffect(() => {
      refresh()
    }, [])
    function refresh() {
      Store.loadRastreios().then(res => {
        setRastreios(res)
        setLoading('loaded')
      })
    }
    switch (loading) {
      case 'loading':
        return <Loading></Loading>;
      case 'loaded':
        return (
          <ScrollView>
            <Container>
              {rastreios && rastreios.map(rastreio => {
                return (
                  <RastreioItem key={rastreio.codigo} rastreio={rastreio}></RastreioItem>
                )
              })}
            </Container>
          </ScrollView>
        )
      default:
        return <Loading></Loading>;
    }

  }


  function RastreioItem({ rastreio }) {
    const navigation = useNavigation();
    return (
      <RastreioItemContent onPress={() => {
        navigation.navigate('Rastreio', { rastreio });
      }} >
        <RastreioItemContentText>{rastreio && rastreio.codigo}</RastreioItemContentText>
      </RastreioItemContent>
    )
  }
}
