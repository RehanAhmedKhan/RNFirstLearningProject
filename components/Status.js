import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {useDispatch} from 'react-redux';
import {statusDelete} from './actions/statusAction';
const Status = props => {
  const action = useDispatch();
  return (
    <>
      <TouchableOpacity
        onPress={() => action(statusDelete(props))}
        style={styles.mainView}>
        <Image source={props.image} style={styles.chatImage} />
        <View
          style={{
            flexDirection: 'row',
            width: '73%',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.chatMainText}>{props.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.chatTime}>{props.date} </Text>
              <Text style={styles.chatTime}>{props.time}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
  statusUpdate: {
    marginLeft: 18,
    color: '#666666',
    fontWeight: '600',
    marginVertical: 6,
    fontSize: 13,
    letterSpacing: 0.5,
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
});
export default Status;
