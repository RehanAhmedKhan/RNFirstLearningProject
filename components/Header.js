import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const Header = props => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor="#128C7E" />
      <TouchableOpacity onPress={() => props.prevScreen.goBack()}>
        <Text style={styles.headerText}>WhatsApp</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Fontisto name={'search'} style={styles.headerIcons} />
        <Fontisto name={'more-v-a'} style={styles.headerIcons} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#128C7E',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  headerIcons: {
    color: '#fff',
    marginRight: 26,
    fontSize: 20,
  },
});

export default Header;
