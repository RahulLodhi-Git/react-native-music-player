import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {trackPlayerList} from '../constant';

export async function initializedThePlayer() {
  let isSetUp = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetUp = true;
  } catch (err) {
    await TrackPlayer.setupPlayer();
    isSetUp = true;
  } finally {
    return isSetUp;
  }
}

export async function addingTracksIntoPlayer() {
  await TrackPlayer.add(trackPlayerList);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function musicPlaybackService() {
  console.log('Demo music  service registered setup');
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext);

  TrackPlayer.addEventListener(
    Event.RemotePrevious,
    () => TrackPlayer.skipToPrevious,
  );
}
