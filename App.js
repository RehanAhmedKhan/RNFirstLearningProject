import React from 'react';
import Whatsapp from './components/Whatsapp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import Networking from './components/Networking';
import NewScreen from './components/NewScreen';
import ReduxLearning from './components/ReduxLearning';
import store from './components/store';
import {Provider} from 'react-redux';
import ChatEditScreen from './components/ChatEditScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NewScreen />
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Networking" component={Networking}></Stack.Screen>
          <Stack.Screen name="NewScreen" component={NewScreen}></Stack.Screen> */}

          <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>

          <Stack.Screen name="Home" component={Whatsapp}></Stack.Screen>
          <Stack.Screen
            name="ChatEditScreen"
            component={ChatEditScreen}></Stack.Screen>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
