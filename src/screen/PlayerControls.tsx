import React, {useContext, useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SongSlider from '../../components/SongSlider';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  useProgress,
} from 'react-native-track-player';
import TrackPlayerContext from '../context/TrackPlayerContext';

const PlayerControls = () => {
  const progress = useProgress();

  const {
    currentTrack,
    setCurrentTrack,
    handlePlayAndPause,
    currentTrackPlaybackState,
  } = useContext(TrackPlayerContext);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    if (
      event.type === Event.PlaybackActiveTrackChanged &&
      event.track != null
    ) {
      setCurrentTrack(event.track);
    }
  });

  const handleNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const handlePrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  return (
    <View style={styleClass.maineWrap}>
      <View style={styleClass.aboveHalf}>
        <Image
          style={styleClass.songCover}
          source={{
            uri: currentTrack?.artwork,
          }}
        />
      </View>
      <View style={styleClass.belowHalf}>
        <View style={styleClass.controlBtnWrap}>
          <Pressable onPress={handlePrevious}>
            <Icon name="skip-previous" size={50} color="#000" />
          </Pressable>
          <Pressable style={styleClass.btnPlay} onPress={handlePlayAndPause}>
            {currentTrackPlaybackState.state === 'playing' ? (
              <Icon name="pause-circle" size={100} color="#7c3aed" />
            ) : (
              <Icon name="play-circle" size={100} color="#7c3aed" />
            )}
          </Pressable>
          <Pressable onPress={handleNext}>
            <Icon name="skip-next" size={50} color="#000" />
          </Pressable>
        </View>
        <SongSlider progress={progress} />
        <View>
          <Text style={styleClass.songTitle}>
            {currentTrack?.title} - {currentTrack?.id}
          </Text>
          <Text style={styleClass.songInfo}>
            {currentTrack?.album} | {currentTrack?.artist} | Parmish verma Flims
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlayerControls;

const styleClass = StyleSheet.create({
  songCover: {
    width: '100%',
    height: '115%',
    objectFit: 'cover',
  },
  songTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  songInfo: {textAlign: 'center', paddingHorizontal: 5, marginBottom: 20},
  maineWrap: {flex: 1},
  aboveHalf: {
    backgroundColor: '#7c787820',
    flex: 2,
  },
  belowHalf: {
    backgroundColor: '#ffffff',
    flex: 2,
    // borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderTopRightRadius: 100,
    // borderTopLeftRadius: 70,
    paddingBottom: 50,
    flexDirection: 'column-reverse',
  },
  controlBtnWrap: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 30,
    // position: 'absolute',
    // bottom: 25,
    width: '100%',
    marginBottom: 30,
  },
  btnPlay: {
    shadowColor: '#7c3aed',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 80.0,
    elevation: 24,
    borderWidth: 0,
    padding: 1,
    borderRadius: 50,
    overflow: 'hidden',
    // borderColor: 'transparent',
  },
  controlWrap: {},
  controlBtn: {},
});
