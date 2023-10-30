import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';

import styles from "./styles"

export default function Example1(){
    return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.boxText}>#1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>#2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>#3</Text>
          </View>
          <StatusBar style="auto" />
        </View>
      );
}