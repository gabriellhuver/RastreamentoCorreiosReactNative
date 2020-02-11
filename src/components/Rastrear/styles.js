import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'

export const Container = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;
export const LabelRastrear = styled.Text`
    font-size:28px;
    margin-bottom:24px;
`;
export const SearchTextInput = styled.TextInput`
    text-align:center;  
    width:320px;
    border-width:${StyleSheet.hairlineWidth};
    border-radius:12px;
    height:48px;
    font-size:22px;
    padding:8px;
`;

export const SearchButton = styled.TouchableOpacity`
    margin:12px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border-radius:12px;
    height:48px;
    width:120px;
    padding:6px;
    background-color:#104E8B;
`;
export const SearchButtonText = styled.Text`
    font-size:14px;
    margin-left:6px;
    color:white;
`;
