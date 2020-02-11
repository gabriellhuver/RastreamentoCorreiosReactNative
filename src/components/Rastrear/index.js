import React, { useState, useEffect } from 'react';
import { Container, SearchTextInput, LabelRastrear, SearchButton, SearchButtonText } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from '../Loading'
import Correios from '../../util/CorreiosRastreamento'
import { Alert } from 'react-native'
import Store from '../../util/Store'
export default function Rastrear({ navigation }) {
  const [codigo, setCodigo] = useState('');

  const [isLoading, setIsLoading] = useState('isLoading');

  useEffect(() => {
    setIsLoading();
  }, [])

  async function fetchData() {
    if (codigo) {
      setIsLoading('isLoading');
      try {
        const res = await Correios.rastrear(codigo);
        if (res === 'Product not found!') {
          Alert.alert('Objeto não encontrado!')
        } else {
          const rastreio = { codigo: codigo, data: res }
          Store.addRastreio(rastreio)
          navigation.navigate('Rastreios', { screen: 'Rastreio', params: { rastreio } });
        }
        setIsLoading()
      } catch (error) {
        setIsLoading()
        Alert.alert('Erro', 'Error on request')
      }
    } else {
      Alert.alert('Insira o codigo de rastreio!')
    }
  }

  switch (isLoading) {
    case 'isLoading':
      return <Loading></Loading>
    default:
      return (
        <Container>
          <Icon name="search" size={38} color="gray" />
          <LabelRastrear>
            Rastrear um objeto
          </LabelRastrear>
          <SearchTextInput value={codigo} autoCapitalize="characters" selectTextOnFocus={true} onChangeText={text => setCodigo(text)}></SearchTextInput>
          <SearchButton onPress={fetchData}>
            <Icon name="search" size={12} color="white" />
            <SearchButtonText>
              Rastrear
            </SearchButtonText>
          </SearchButton>
        </Container>
      );
  }
}
