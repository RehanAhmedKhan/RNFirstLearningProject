import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Navbar = props => {
  return (
    <View style={styles.navMainView}>
      <Image
        style={styles.navCamera}
        source={require('../assets/photo-camera.png')}
      />
      <View style={styles.navInerView}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 60,
            height: 40,
            justifyContent: 'center',
            paddingLeft: 12,
          }}>
          <Text style={styles.navChat}>Chats</Text>
          <View style={styles.chatIcon}>
            <Text style={styles.chatNum}>{props.number}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: 60,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.navChat}>Status</Text>
          <View style={styles.statusIcon}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 50,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.navChat}>Calls</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navMainView: {
    height: 50,
    backgroundColor: '#128C7E',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navInerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    paddingRight: 30,
  },
  navChat: {
    fontSize: 14,
    color: '#ECE5DD',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  navCamera: {
    height: 21,
    width: 21,
    tintColor: '#ECE5DD',
    marginLeft: 12,
  },
  chatIcon: {
    backgroundColor: 'white',
    marginLeft: 6,
    height: 17,
    width: 17,
    marginTop: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  chatNum: {
    color: '#128C7E',
    fontSize: 12,
    paddingTop: 1,
    fontWeight: '800',
  },
  statusIcon: {
    backgroundColor: '#ECE5DD',
    marginLeft: 4,
    marginTop: 1,
    height: 7,
    width: 7,
    borderRadius: 10,
  },
});

export default Navbar;
