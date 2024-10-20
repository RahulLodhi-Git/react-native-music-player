import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

const SongSlider = () => {
  return (
    <View>
      <Slider
        style={{width: '100%', height: 25}}
        minimumValue={1}
        maximumValue={10}
        minimumTrackTintColor="#8b84e4"
        maximumTrackTintColor="#000000"
        value={2}
        thumbTintColor="#7c3aed"
      />
      <View style={styleClass.timerWrap}>
        <Text>0.34</Text>
        <Text>04.5</Text>
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
