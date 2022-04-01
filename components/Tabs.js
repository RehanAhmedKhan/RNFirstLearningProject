//Tabs Section
import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatList from './ChatList';
import StatusList from './StatusList';
import CallsList from './CallsList';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Cam from './Cam';
const Tabs = props => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarItemStyle: {width: 'auto'},
        tabBarStyle: {backgroundColor: '#128C7E'},
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          height: 3,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#B6DAD6',
        tabBarPressColor: '#B6DAD6',
      }}>
      <Tab.Screen
        name="Cam"
        component={Cam}
        options={{
          title: props => (
            <View style={{marginHorizontal: 10}}>
              <Fontisto
                size={14}
                name="camera"
                color={props.focused ? '#fff' : '#B6DAD6'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        children={() => <ChatList propName={props.screen} />}
        options={{
          title: props => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 13,
              }}>
              <Text
                style={{
                  color: props.focused ? '#fff' : '#B6DAD6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                CHATS
              </Text>
              <View
                style={{
                  backgroundColor: props.focused ? '#fff' : '#B6DAD6',
                  marginLeft: 6,
                  height: 18,
                  width: 18,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#128C7E',
                    fontSize: 11,
                    fontWeight: 'bold',
                  }}>
                  8
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={StatusList}
        options={{
          title: props => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 16,
                marginRight: 20,
              }}>
              <Text
                style={{
                  color: props.focused ? '#fff' : '#B6DAD6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                STATUS
              </Text>
              <View
                style={{
                  backgroundColor: props.focused ? '#fff' : '#B6DAD6',
                  marginLeft: 4,
                  marginTop: 1,
                  height: 7,
                  width: 7,
                  borderRadius: 10,
                }}></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={CallsList}
        options={{
          title: ({focused}) => (
            <View
              style={{
                marginLeft: 18,
                marginRight: 26,
              }}>
              <Text
                style={{
                  color: focused ? '#fff' : '#B6DAD6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                CALLS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
