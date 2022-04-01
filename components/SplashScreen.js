import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home');
    }, 50);
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            style={styles.image}
            source={require('../assets/whatsapp.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textFrom}>from</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.meta} source={require('../assets/meta.png')} />
          <Text style={styles.textmeta}>Meta</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  imageView: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  textView: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  meta: {
    width: 20,
    height: 20,
    tintColor: '#25D366',
    marginRight: 3,
  },
  textFrom: {
    color: '#666666',
    fontSize: 16,
  },
  textmeta: {
    color: '#25D366',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default SplashScreen;
