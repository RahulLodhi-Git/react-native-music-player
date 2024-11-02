import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useEffect, useState } from 'react';
import TrackPlayer, {
    State as TPState,
    usePlaybackState,
} from 'react-native-track-player';
import { getQueue } from 'react-native-track-player/lib/src/trackPlayer';
import { trackPlayerList } from '../../constant';

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
    const loadTrackAndPlay = async (trackId) => {
        console.log('trackId,', (trackId - 1) !== 0);
        let track = {};
        if ((trackId - 1) !== 0) {
            track = await TrackPlayer.getTrack(trackId - 1);
            await TrackPlayer.load(track);
        } else {
            track = await TrackPlayer.getTrack(0);
            await TrackPlayer.load(track);
        }
        await TrackPlayer.play();
        setCurrentTrack(track);
    }
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

