import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const NewScreen = ({route}) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${route.params.id}`,
      );
      setValue(result.data);
    };
    getData();
  }, []);

  return (
    <View style={styles.main}>
      <Text style={styles.title}>ID: {route.params.id}</Text>
      <Text style={styles.title}>Title: {value.title}</Text>
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e3eaa7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: 'black',
  },
});
