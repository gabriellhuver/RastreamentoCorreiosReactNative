import React from 'react';
import { Text, View, Button } from 'react-native';

import { Container, HeaderCodigo, TextStatus, TextData, TextLocal, ItemContainer } from './styles';
import Store from '../../util/Store';

export default function Rastreio({ route, navigation }) {
    console.log(route)
    const { codigo, data } = route.params.rastreio;
    //console.log(data)
    return (
        <Container>
            <HeaderCodigo>
                {codigo && codigo}
            </HeaderCodigo>
            {data && data.map(item => {
                return (
                    <ItemContainer key={item.data}>
                        <TextData>Data: {item.data}</TextData>
                        <TextStatus>Status:{item.status}</TextStatus>
                        <TextLocal style={{ display: `${item.local ? `flex` : `none`}` }}>{item.local && item.local}</TextLocal>
                        <TextLocal style={{ display: `${item.origem ? `flex` : `none`}` }}>{item.origem && item.origem}</TextLocal>
                        <TextLocal style={{ display: `${item.destino ? `flex` : `none`}` }}>{item.destino && item.destino}</TextLocal>
                    </ItemContainer>
                )
            })}
            <Button title="Deletar" onPress={() => {
                Store.removeRastreio(codigo)
                navigation.goBack()
            }}> </Button>
        </Container >
    );
}
