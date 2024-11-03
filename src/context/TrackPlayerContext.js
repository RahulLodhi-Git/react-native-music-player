import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useEffect, useState } from 'react';
import TrackPlayer, {
    Event,
    State as TPState,
    usePlaybackState,
    useTrackPlayerEvents,
} from 'react-native-track-player';
import { getQueue } from 'react-native-track-player/lib/src/trackPlayer';
import { trackPlayerList } from '../../constant';
import { addingTracksIntoPlayer } from '../musicPlaybackService';

const TrackPlayerContext = createContext({});

const TrackPlayerContextProvider = ({ children }) => {
    const currentTrackPlaybackState = usePlaybackState();
    const [currentTrack, setCurrentTrack] = useState(null);


    const getActiveTrack = async () => {
        let track = await TrackPlayer.getActiveTrack();
        setCurrentTrack(track);
    };

    const handlePlayAndPause = async () => {
        if (
            TPState.Paused === currentTrackPlaybackState.state ||
            TPState.Ready === currentTrackPlaybackState.state
        ) {
            await TrackPlayer.play();
        } else {
            await TrackPlayer.pause();
        }
    };

    const loadTrackAndPlay = async (trackId, item) => {
        await TrackPlayer.reset()
        await addingTracksIntoPlayer(item);
        let track = await TrackPlayer.getActiveTrack();
        await TrackPlayer.load(track);
        setCurrentTrack(track);
        await TrackPlayer.play();
    };

    const defaultValues = {
        currentTrack,
        getActiveTrack,
        setCurrentTrack,
        handlePlayAndPause,
        currentTrackPlaybackState,
        loadTrackAndPlay
    };
    useEffect(() => {
        getActiveTrack()
    }, [])


    return (
        <TrackPlayerContext.Provider value={defaultValues}>
            {children}
        </TrackPlayerContext.Provider>
    );
};

export default TrackPlayerContext;
export { TrackPlayerContextProvider };

