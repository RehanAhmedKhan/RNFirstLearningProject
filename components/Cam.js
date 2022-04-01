import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

const Cam = () => {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.camera}>
        <TouchableOpacity style={styles.button} />
        <Text style={{color: '#fff'}}>Hold for video, tap for photo</Text>
      </RNCamera>
    </View>
  );
};

export default Cam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    padding: 30,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 5,
  },
});
