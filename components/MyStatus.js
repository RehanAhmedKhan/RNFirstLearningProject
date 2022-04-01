import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const MyStatus = () => {
  return (
    <>
      <View style={styles.mainView}>
        <Image
          source={require('../assets/IMG_20190509_192612_265.jpg')}
          style={styles.chatImage}
        />
        <View style={styles.mystatus}>
          <Image
            source={require('../assets/plus.png')}
            style={styles.viewImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '73%',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.chatMainText}>My Status</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.chatTime}>Tap to add status update</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.statusUpdate}>Recent updates</Text>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },
  chatImage: {
    borderRadius: 30,
    width: 50,
    height: 50,
    marginHorizontal: 18,
  },
  mystatus: {
    position: 'absolute',
    backgroundColor: '#128C7E',
    padding: 4,
    borderRadius: 12,
    top: 38,
    left: 46,
    borderWidth: 2,
    borderColor: 'white',
  },
  viewImage: {
    width: 12,
    height: 12,
    tintColor: 'white',
  },

  chatMainText: {
    color: 'black',
    fontSize: 17,
  },
  chatTime: {
    color: '#666666',
    fontSize: 14,
    marginTop: 1,
  },
  statusUpdate: {
    marginLeft: 18,
    color: '#666666',
    fontWeight: '600',
    marginVertical: 6,
    fontSize: 13,
    letterSpacing: 0.5,
  },
});

export default MyStatus;
