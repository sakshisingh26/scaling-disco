import * as React from 'react';
import {Dimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import Screen1 from '../Screen1';
import Screen2 from '../Screen2';
import Screen3 from '../Screen3';
import Screen4 from '../Screen4';
import Screen5 from '../Screen5';
import Screen6 from '../Screen6';
import Screen7 from '../Screen7';
import Screen8 from '../Screen8';
import Screen9 from '../Screen9';
import Screen10 from '../Screen10';

// eslint-disable-next-line no-unused-vars
const {height, width} = Dimensions.get('window');
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen4"
        component={Screen4}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen5"
        component={Screen5}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen6"
        component={Screen6}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen7"
        component={Screen7}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen8"
        component={Screen8}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen9"
        component={Screen9}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Screen10"
        component={Screen10}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="awareness-ribbon"
              type="entypo"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="baidu" type="entypo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="cake" type="entypo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="chat" type="entypo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen5"
        component={Screen5}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="flower" type="entypo" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs">
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
