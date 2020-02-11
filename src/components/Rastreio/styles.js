import styled from 'styled-components/native'
import { StyleSheet} from 'react-native'
export const Container = styled.ScrollView`
  flex:1;
`;
export const ItemContainer = styled.View`
  border-bottom-color:black;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`
export const TextStatus = styled.Text`
  align-self:center;
  padding:4px;
  font-size:15px;
`
export const TextLocal = styled.Text`
  align-self:center;
  padding:4px;
  font-size:10px;
`
export const TextData = styled.Text`
  align-self:center;
  padding:4px;
  font-size:15px;
`
export const HeaderCodigo = styled.Text`
  font-size:32px;
  align-self:center;
  padding:12px;
  border-color:black;
  border-width:${StyleSheet.hairlineWidth};
  border-radius:12px;
  margin:6px;
`