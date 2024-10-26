import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PlayerControls from './screen/PlayerControls';
import {
  addingTracksIntoPlayer,
  initializedThePlayer,
} from './musicPlaybackService';
import TrackPlayer from 'react-native-track-player';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const setUpPlayer = async () => {
    let isPlayerReady = await initializedThePlayer();
    if (isPlayerReady) {
      await addingTracksIntoPlayer();
      setIsPlayerReady(isPlayerReady);
    }
  };

  useEffect(() => {
    setUpPlayer();
  }, []);

  if (!isPlayerReady) {
    return (
      <View style={styles.ShowLoading}>
        <ActivityIndicator size={40} />
        <Text>Please wait, We ready a player for you.</Text>
      </View>
    );
  }

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
  ShowLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
