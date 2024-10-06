import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PlayerControls from './screen/PlayerControls';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#f5f3ff', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="red" />
      <PlayerControls />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'red',
  },
});
