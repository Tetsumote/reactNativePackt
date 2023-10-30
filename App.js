import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';

const Box = styled.View`
  width:100px;
  height:100px;
  justify-content:center;
  align-items:center;
  background-color:lightgray
`;

const BoxText =  styled.Text`
  color:darkslategray;
  font-weight:bold
`

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>I'm in a box!</Text>
      </View>
      <Box>
        <BoxText>I'm in a box</BoxText>
      </Box>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios:{paddingTop:20},
      android:{ paddingTop: StatusBar.currentHeight }
    })
  },
  text:{
    fontWeight:"bold",
  },
  box:{
    width:100,
    height:100,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'lightgray',
  },
  boxText:{
    color:"darkslategray",
    fontWeight:"bold"
  }
});
