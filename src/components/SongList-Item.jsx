import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {trackPlayerList} from '../../constant';
import TrackPlayer from 'react-native-track-player';

const SongListItem = ({
  navigation,
  activeTrack,
  handlePlayAndPause,
  currentTrackPlaybackState,
  loadTrackAndPlay,
}) => {
  //   const {navigation} = props;c
  const renderListitem = ({item}) => {
    // console.log(
    //   'currentTrack',
    //   activeTrack?.id,
    //   item?.id,
    //   currentTrackPlaybackState === 'playing',
    //   currentTrackPlaybackState === 'playing' && activeTrack?.id === item?.id,
    // );
    return (
      <View style={[styleCls.item, styleCls.itemActive]}>
        <View style={styleCls.left}>
          <Text style={styleCls.songTitle}>
            {item?.id} - {item?.title}
          </Text>
          <Text style={styleCls.default}>
            {item?.artist} | {item?.album}
          </Text>
        </View>
        <View style={styleCls.right}>
          <Pressable
            onPress={() => {
              loadTrackAndPlay(item?.id);
            }}>
            {currentTrackPlaybackState === 'playing' &&
            activeTrack?.id === item?.id ? (
              <Icon
                style={styleCls.icon}
                name="pause-circle"
                size={40}
                color="#8546f1fb"
              />
            ) : (
              <Icon
                style={styleCls.icon}
                name="play-circle"
                size={40}
                color="#949393"
              />
            )}
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styleCls.mainWrap}>
      <View style={styleCls.header}>
        <Text style={styleCls.headerText}>All Song</Text>
      </View>
      <View style={styleCls.itemWrap}>
        <FlatList
          data={trackPlayerList}
          keyExtractor={item => item.id}
          renderItem={renderListitem}
        />
      </View>

      <View style={styleCls.playerTiles}>
        <View style={styleCls.item}>
          <Pressable
            onPress={() => navigation.navigate('PlayerScreen')}
            style={{width: '80%'}}>
            <View style={styleCls.left}>
              <Text style={styleCls.p_songTitle}>
                {activeTrack?.id} - {activeTrack?.title}
              </Text>
              <Text style={styleCls.p_default}>
                {activeTrack?.artist} | {activeTrack?.album}
              </Text>
            </View>
          </Pressable>
          <View style={styleCls.right}>
            <Pressable onPress={handlePlayAndPause}>
              {currentTrackPlaybackState.state === 'playing' ? (
                <Icon
                  style={styleCls.icon}
                  name="pause-circle"
                  size={40}
                  color="#ffffff"
                />
              ) : (
                <Icon
                  style={styleCls.icon}
                  name="play-circle"
                  size={40}
                  color="#ffffff"
                />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SongListItem;

const styleCls = StyleSheet.create({
  songTitle: {fontSize: 18, fontWeight: '500'},
  default: {color: '#666666'},
  mainWrap: {position: 'relative', height: '100%'},
  itemWrap: {
    marginTop: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#ffffff',
    // backgroundColor: '#b0a4ee',
    paddingTop: '50',
    paddingHorizontal: 15,
    paddingVertical: 30,
    height: '90%',
    zIndex: 1,
    paddingBottom: 80,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#dfdada',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
    // backgroundColor: '#FFFFFF',
    // shadowColor: 'rgba(0, 0, 0, 0.438)',
    // shadowOpacity: 0.8,
    // elevation: 6,
    // shadowRadius: 15,
    // shadowOffset: {width: 1, height: 13},
  },
  left: {width: '80%'},
  right: {width: 'auto'},
  header: {},
  headerText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    paddingVertical: 10,
  },
  icon: {
    elevation: 14,
    // backgroundColor: '#fff',
    shadowColor: '#666',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 80.0,
    borderWidth: 0,
    // overflow: 'hidden',
    borderRadius: 50,
  },
  iconActive: {
    shadowColor: '#7c3aed',
    color: '#7c3aed',
    elevation: 24,
    borderRadius: 50,
    borderWidth: 0,
  },
  itemActive: {
    // shadowColor: '#fafafa',
    backgroundColor: '#FFFFFF',
    shadowColor: '#7c3aed',
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: {width: 2, height: 13},
  },
  playerTiles: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '100px',
    width: '100%',
    backgroundColor: '#8546f1fb',
    zIndex: 9,
  },
  p_default: {
    color: '#fff',
    fontWeight: '600',
  },
  p_songTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
