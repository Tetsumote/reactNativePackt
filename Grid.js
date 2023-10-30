import React from "react";

import { View, StatusBar,Text } from 'react-native';

import styles from "./styles1";
import Box from "./BoxGrid";

const boxes = new Array(10).fill(null).map((v, i) => i + 1);

export default function Grid(){
    return(
        <View style={styles.container}>
        <StatusBar hidden={false} />
        {boxes.map((i) => (
          <Box key={i}>#{i}</Box>
        ))}
      </View>
    )
}