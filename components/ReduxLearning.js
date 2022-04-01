import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {IncNumber, DecNUmber} from './actions/action';

const ReduxLearning = () => {
  const initialValue = useSelector(value => value.incDecNumber);
  const action = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => action(DecNUmber())}>
        <Text style={styles.textt}> - </Text>
      </TouchableOpacity>
      <Text style={styles.text}>Count: {initialValue}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => action(IncNumber(5))}>
        <Text style={styles.textt}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 20,
    color: '#000',
  },
  text: {
    color: '#000',
    padding: 10,
    fontSize: 18,
    backgroundColor: '#e3eaa7',
  },
  textt: {
    color: '#000',
    fontSize: 18,
  },
});

export default ReduxLearning;
