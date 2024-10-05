/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import TrackPlayer from 'react-native-track-player';
import { musicPlaybackService } from './src/musicPlaybackService';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => musicPlaybackService)