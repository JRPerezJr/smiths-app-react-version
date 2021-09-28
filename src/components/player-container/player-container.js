import React, { useState, useEffect, useRef } from 'react';

import AlbumArtComponent from '../album-art-container/album-art-container';
import {
  StyledArtist,
  StyledPlayerContainer,
  StyledTitle,
} from './player-container.styles';

import ProgressBar from '../progress-bar/progress-bar';
import PlayerControls from '../player-controls/player-controls';

const PlayerContainerComponent = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, albumArtUrl, audioUrl } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioUrl));
  const intervalRef = useRef();
  // const isReady = useRef(false);

  // Destructure for conciseness
  // const { duration } = audioRef.current;
  // const startTimer = () => {
  //   // Clear any timers already running
  //   clearInterval(intervalRef.current);

  //   intervalRef.current = setInterval(() => {
  //     audioRef.current.ended
  //       ? toNextTrack()
  //       : setTrackProgress(audioRef.current.currentTime);
  //   }, [900]);
  // };

  const toPrevTrack = () => {
    trackIndex - 1 < 0
      ? setTrackIndex(tracks.length - 1)
      : setTrackIndex(trackIndex - 1);
  };

  const toNextTrack = () => {
    trackIndex < tracks.length - 1
      ? setTrackIndex(trackIndex + 1)
      : setTrackIndex(0);
  };

  const loadTrack = () => {
    const loadedTrack = audioRef.current;
    console.log('Loaded first track');
    // console.log(tracks);
    console.log(loadedTrack.src);
    console.log(loadedTrack.currentTime);
    console.log(
      Math.floor(loadedTrack.duration / 60),
      ':',
      Math.floor(loadedTrack.duration % 60)
    );
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      // startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    loadTrack();
  }, []);

  return (
    <StyledPlayerContainer>
      {/* Song */}
      <AlbumArtComponent
        albumCover={albumArtUrl}
        title={title}
        artist={artist}
      />
      <StyledTitle>{title}</StyledTitle>
      <StyledArtist>{artist}</StyledArtist>

      {/* Progress */}
      <ProgressBar />
      {/* Controls */}
      <PlayerControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
      />
    </StyledPlayerContainer>
  );
};

export default PlayerContainerComponent;
