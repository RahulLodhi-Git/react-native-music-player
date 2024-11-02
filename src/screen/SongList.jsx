import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SongListItem from '../components/SongList-Item';
import TrackPlayer from 'react-native-track-player';

const SongList = props => {
  const [activeTrack, setActiveTrack] = useState(null);

  const getActiveTrack = async () => {
    let currentLoadTrack = await TrackPlayer.getActiveTrack();
    setActiveTrack(currentLoadTrack);
  };

  useEffect(() => {
    getActiveTrack();
  }, []);

  return (
    <View>
      <SongListItem navigation={props.navigation} activeTrack={activeTrack} />
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({});
