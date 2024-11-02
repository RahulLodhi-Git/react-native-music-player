import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import SongListItem from '../components/SongList-Item';

import TrackPlayerContext from '../context/TrackPlayerContext';

const SongList = props => {
  const {
    currentTrack,
    handlePlayAndPause,
    currentTrackPlaybackState,
    setCurrentTrack,
    loadTrackAndPlay,
  } = useContext(TrackPlayerContext);

  return (
    <View>
      <SongListItem
        navigation={props.navigation}
        activeTrack={currentTrack}
        handlePlayAndPause={handlePlayAndPause}
        currentTrackPlaybackState={currentTrackPlaybackState}
        setCurrentTrack={setCurrentTrack}
        loadTrackAndPlay={loadTrackAndPlay}
      />
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({});
