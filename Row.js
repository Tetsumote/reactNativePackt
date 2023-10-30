import React from "react";

import { Text, View, StatusBar } from 'react-native';
import styles from "./styles";
import Box from "./BoxRow";



export default function Row(){
    return(
        <View style={styles.containerRow}>
            <Box>#1</Box>
            <Box>#2</Box>
        </View>
    )
}