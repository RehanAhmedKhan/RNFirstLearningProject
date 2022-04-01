import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {useDispatch} from 'react-redux';
import {messageEdit} from './actions/messageAction';

const ChatEditScreen = ({route}) => {
  const action = useDispatch();
  const [text, setText] = useState(route.params.item.name);
  return (
    // <View>
    //   <Text>{route.params.name}</Text>
    // </View>
    <>
      <TouchableOpacity style={styles.mainView}>
        <Image source={route.params.item.image} style={styles.chatImage} />
        <View
          style={{
            flexDirection: 'row',
            width: '73%',
            justifyContent: 'space-between',
          }}>
          <View>
            {/* <Text style={styles.chatMainText}>{route.params.item.name}</Text> */}
            <TextInput
              onChangeText={value => setText(value)}
              style={styles.input}
              placeholderTextColor="#000"
              autoCapitalize="none"
            />

            <View style={{flexDirection: 'row'}}>
              {route.params.item.pdf === true ? (
                <Image
                  style={styles.subIcon}
                  source={require('../assets/pdf.png')}
                />
              ) : (
                <></>
              )}
              {route.params.item.call === true ? (
                <Image
                  style={styles.subIcon}
                  source={require('../assets/zoom.png')}
                />
              ) : (
                <></>
              )}
              {route.params.item.ticks === 0 ? (
                <Image
                  style={styles.messageTicks}
                  source={require('../assets/check.png')}
                />
              ) : (
                <Image
                  style={[
                    styles.messageTicks,
                    route.params.item.ticks === 1 ? {} : {tintColor: '#34B7F1'},
                  ]}
                  source={require('../assets/read.png')}
                />
              )}
              <Text numberOfLines={1} style={styles.subText}>
                {' '}
                {route.params.item.message}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.chatTime}>{route.params.item.time}</Text>
            <View style={{flexDirection: 'row'}}>
              {route.params.item.mute === true ? (
                <Image
                  style={styles.chatMessIcon}
                  source={require('../assets/mute.png')}
                />
              ) : (
                <></>
              )}
              {route.params.item.pin === true ? (
                <Image
                  style={styles.chatMessIcon}
                  source={require('../assets/office-push-pin.png')}
                />
              ) : (
                <></>
              )}
              <View style={styles.chatIcon}>
                <Text style={styles.chatNum}>
                  {route.params.item.messageCount}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => action(messageEdit(route.params.item, text))}>
        <Text style={{color: '#fff', fontSize: 16}}>Update</Text>
      </TouchableOpacity>
    </>
  );
};

export default ChatEditScreen;

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
  input: {
    fontSize: 17,
    borderColor: '#000',
    padding: 0,
    borderWidth: 1,
  },
  button: {
    width: 100,
    marginTop: 20,
    marginLeft: 140,
    alignItems: 'center',
    backgroundColor: '#128C7E',
    padding: 10,
    borderRadius: 20,
  },
});
