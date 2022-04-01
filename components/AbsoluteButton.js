import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

const AbsoluteButton = props => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(props.value())}
      style={styles.button}
      activeOpacity={0.7}></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: '#128C7E',
    padding: 27,
    borderRadius: 27,
  },
});

export default AbsoluteButton;
