import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {useSelector, useDispatch} from 'react-redux';
import {messageDelete, messageEdit} from './actions/messageAction';

const Chats = props => {
  const action = useDispatch();
  return (
    <TouchableOpacity
      // onPress={() => props.removeItem(props)}
      onPress={() => action(messageDelete(props))}
      style={styles.mainView}
      activeOpacity={0.7}>
      <Image source={props.image} style={styles.chatImage} />
      <View
        style={{
          flexDirection: 'row',
          width: '73%',
          justifyContent: 'space-between',
        }}>
        <View>
          <TouchableOpacity
            onPress={() =>
              props.newpageprop.navigate('ChatEditScreen', {
                item: props,
              })
            }>
            <Text style={styles.chatMainText}>{props.name}</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            {props.pdf === true ? (
              <Image
                style={styles.subIcon}
                source={require('../assets/pdf.png')}
              />
            ) : (
              <></>
            )}
            {props.call === true ? (
              <Image
                style={styles.subIcon}
                source={require('../assets/zoom.png')}
              />
            ) : (
              <></>
            )}
            {props.ticks === 0 ? (
              <Image
                style={styles.messageTicks}
                source={require('../assets/check.png')}
              />
            ) : (
              <Image
                style={[
                  styles.messageTicks,
                  props.ticks === 1 ? {} : {tintColor: '#34B7F1'},
                ]}
                source={require('../assets/read.png')}
              />
            )}
            <Text numberOfLines={1} style={styles.subText}>
              {' '}
              {props.message}
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.chatTime}>{props.time}</Text>
          <View style={{flexDirection: 'row'}}>
            {props.mute === true ? (
              <Image
                style={styles.chatMessIcon}
                source={require('../assets/mute.png')}
              />
            ) : (
              <></>
            )}
            {props.pin === true ? (
              <Image
                style={styles.chatMessIcon}
                source={require('../assets/office-push-pin.png')}
              />
            ) : (
              <></>
            )}
            <View style={styles.chatIcon}>
              <Text style={styles.chatNum}>{props.messageCount}</Text>
            </View>
          </View>
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
    fontWeight: '400',
  },
  chatTime: {
    marginTop: 3,
    fontSize: 12,
    color: '#25D366',
  },
  chatMessIcon: {
    height: 16,
    width: 16,
    marginTop: 5,
    marginRight: 8,
    tintColor: '#9fa2a4',
  },
  chatIcon: {
    backgroundColor: '#25D366',
    height: 20,
    width: 20,
    marginTop: 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  chatNum: {
    color: 'white',
    fontSize: 12,
    fontWeight: '800',
    paddingTop: 2,
  },
  subIcon: {
    height: 16,
    width: 16,
    marginRight: 1,
    alignSelf: 'center',
    marginTop: 2,
    tintColor: '#9fa2a4',
  },
  messageTicks: {
    height: 16,
    width: 16,
    marginRight: 1,
    marginTop: 2,

    alignSelf: 'center',
    tintColor: '#9fa2a4',
  },
  subText: {
    color: '#747474',
    fontSize: 14,
    marginTop: 1,
    width: windowWidth * 0.4,
  },
});
export default Chats;
