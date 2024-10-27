import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

const SongSlider = ({progress}) => {
  const {buffered, duration, position} = progress || {};
  return (
    <View>
      <Slider
        style={{width: '100%', height: 25}}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#8b84e4"
        maximumTrackTintColor="#000000"
        value={position}
        thumbTintColor="#7c3aed"
        disabled={true}
      />

      <View style={styleClass.timerWrap}>
        <Text>{new Date(position * 1000).toISOString().substring(15, 19)}</Text>
        <Text>{new Date(duration * 1000).toISOString().substring(15, 19)}</Text>
      </View>
    </View>
  );
};

export default SongSlider;

const styleClass = StyleSheet.create({
  timerWrap: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
});
