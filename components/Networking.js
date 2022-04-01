import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Networking = ({navigation}) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      setValue(result.data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={value}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('NewScreen', {
                  id: item.id,
                })
              }
              style={styles.main}>
              <Text style={styles.title}>
                {item.id}. {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default Networking;
