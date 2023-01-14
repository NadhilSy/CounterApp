import { StatusBar } from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.buttonWrapper}>
        {/*<Button title=Increment onPress={increment}/>*/}
        {/*<Button title=Decremen onPress={decrement}/>*/}
        <Pressable onPress={increment} style={styles.button1}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
        <Pressable onPress={decrement} style={styles.button2}>
          <Text style={styles.textButton}>-</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter:{
    fontSize : 50,
    fontWeight : 'bold'
  },
  buttonWrapper:{
    marginTop: 20,
    flexDirection: "row"
  },
  button1:{
    height: 55,
    width: 55,
    backgroundColor:"#a692e8",
    margin:10,
    padding: 15,
    borderRadius: 50
  },
  button2:{
    height: 55,
    width: 55,
    backgroundColor:"#e83158",
    margin:10,
    padding: 15,
    borderRadius: 50
  },
  textButton: {
    fontStyle:"bold",
    fontSize:17,
    color: "white",
    textAlign:"center"
  }
});
