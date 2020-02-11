import React from 'react';
import { View, Image } from 'react-native';

import { Container } from './styles';
import Spinner from '../../../assets/Spinner-1s-200px.gif'
export default function Loading() {
    return (
        <Container>
            <Image style={{ width: 64, height: 64 }} source={Spinner}></Image>
        </Container>
    );
}
