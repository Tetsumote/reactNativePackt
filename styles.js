import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'ghostwhite',
      alignItems: 'center',
      justifyContent: 'space-around',
      ...Platform.select({
        ios:{paddingTop:20},
        android:{ paddingTop: StatusBar.currentHeight }
      })
    },
    containerRow:{
        flex: 1,
        flexDirection:"row",
        backgroundColor: 'ghostwhite',
        alignItems: 'center',
        justifyContent: 'space-around',
        ...Platform.select({
          ios:{paddingTop:20},
          android:{ paddingTop: StatusBar.currentHeight }
        })
    },
    boxRow:{
        width:100,
        justifyContent:"center",
        alignSelf:"stretch",
        alignItems:"center",
        backgroundColor:'lightgray',
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:"darkslategray",
    },
    box:{
      height:100,
      justifyContent:"center",
      alignSelf:"stretch",
      alignItems:"center",
      backgroundColor:'lightgray',
      borderWidth:1,
      borderStyle:'dashed',
      borderColor:"darkslategray",
    },
    boxText:{
      color:"darkslategray",
      fontWeight:"bold"
    },
    row:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignSelf:"stretch",
    },
    column:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        alignSelf:"stretch"
    }
  });