import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SongListItem from '../components/SongList-Item';

const SongList = props => {
  return (
    <View>
      <SongListItem navigation={props.navigation} />
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({});
