import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SongList from '../screen/SongList';
import PlayerControls from '../screen/PlayerControls';
import {NavigationContainer} from '@react-navigation/native';

const ScreenRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SongList">
        <Stack.Screen
          name="SongListScreen"
          component={SongList}
          options={{title: 'Songs', headerShown: false}}
        />
        <Stack.Screen name="PlayerScreen" component={PlayerControls} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenRoutes;
