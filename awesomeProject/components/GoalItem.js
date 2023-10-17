import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalItem(props) {
    return(
    <View style = {styles.goalItems}>  
        <Text> {props.text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
   
    goalItems: {
      backgroundColor: '#93b1a6',
      borderColor: '#93b1a6',
      marginVertical: 8,
      borderWidth: 1,
      padding: 10,
      
    },
  
  });