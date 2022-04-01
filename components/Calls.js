import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {useDispatch} from 'react-redux';
import {callDelete} from './actions/callsAction';

const Calls = props => {
  const action = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => action(callDelete(props))}
      style={styles.mainView}>
      <Image source={props.image} style={styles.chatImage} />
      <View
        style={{
          flexDirection: 'row',
          width: '72%',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.chatMainText}>{props.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={[
                styles.messageTicks,
                props.ticks === 0 ? {} : {tintColor: '#EA0038'},
              ]}
              source={
                props.ticks === 0
                  ? require('../assets/incoming-call.png')
                  : require('../assets/outgoing-call.png')
              }
            />
            {props.missedCalls > 0 ? (
              <Text style={styles.chatTime}> ({props.missedCalls})</Text>
            ) : (
              <></>
            )}
            <Text style={styles.chatTime}>{props.date}</Text>
            <Text style={styles.chatTime}>{props.time}</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Image
            style={[
              styles.callIcons,
              props.call === 0 ? {} : {width: 23, height: 23},
            ]}
            source={
              props.call === 0
                ? require('../assets/zoom.png')
                : require('../assets/phone-call.png')
            }
          />
        </View>
      </View>
    </TouchableOpacity>
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
  chatMainText: {
    color: 'black',
    fontSize: 17,
  },
  chatTime: {
    color: '#666666',
    fontSize: 14,
    marginTop: 1,
    marginHorizontal: 3,
  },
  messageTicks: {
    height: 12,
    width: 12,
    alignSelf: 'center',
    marginTop: 2,
    tintColor: '#00C448',
  },
  callIcons: {
    width: 28,
    height: 28,
    tintColor: '#128C7E',
  },
});
export default Calls;
