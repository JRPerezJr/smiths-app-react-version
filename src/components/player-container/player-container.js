import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import AlbumArtComponent from '../album-art-container/album-art-container';
import {
  StyledArtist,
  StyledPlayerContainer,
  StyledTitle,
} from './player-container.styles';

import ProgressBar from '../progress-bar/progress-bar';
import PlayerControls from '../player-controls/player-controls';
import VolumeControls from '../volume-controls/volume-controls';

const PlayerContainerComponent = ({ tracks }) => {
  // State
  const [audioElement, setAudioElement] = useState(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [audioContext, setAudioContext] = useState(null);
  const [gainNode, setGainNode] = useState(null);

  const [volumeInput, setVolumeInput] = useState(0.5);

  // const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, albumArtUrl, audioUrl } = tracks[trackIndex];

  const toPrevTrack = () => {
    trackIndex - 1 < 0
      ? setTrackIndex(tracks.length - 1)
      : setTrackIndex(trackIndex - 1);
    if (isPlaying) {
      setTimeout(() => {
        audioElement.play();
      }, 500);
    }
  };

  const toNextTrack = () => {
    setTrackIndex(trackIndex + 1);
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
    }

    if (isPlaying) {
      setTimeout(() => {
        audioElement.play();
      }, 500);
    }
  };

  const playTrack = val => {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    if (!isPlaying) {
      audioElement.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    }

    if (val) {
      setIsPlaying(true);
      audioElement.play();
    } else {
      setIsPlaying(false);
      audioElement.pause();
    }
  };

  const onEndTrack = e => {
    toNextTrack(e);
  };

  const handleVolume = e => {
    gainNode.gain.value = e.target.value;
    setVolumeInput(e.target.value);
  };

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    setAudioContext(audioContext);

    const audioElement = document.querySelector('audio');
    setAudioElement(audioElement);

    const gainNode = audioContext.createGain();
    setGainNode(gainNode);

    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(gainNode).connect(audioContext.destination);
  }, []);

  return (
    <StyledPlayerContainer>
      <Helmet>
        <title>{title} | The Smiths Player</title>
      </Helmet>

      {/* Song */}
      <AlbumArtComponent
        albumCover={albumArtUrl}
        title={title}
        artist={artist}
      />

      <StyledTitle>{title}</StyledTitle>
      <StyledArtist>{artist}</StyledArtist>
      <audio src={audioUrl} onEnded={e => onEndTrack(e)}></audio>
      {/* Progress */}
      <ProgressBar />
      {/* Controls */}
      <PlayerControls
        track={tracks[trackIndex]}
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={playTrack}
      />
      {/* Volume */}
      <VolumeControls handleVolume={handleVolume} volumeInput={volumeInput} />
    </StyledPlayerContainer>
  );
};

export default PlayerContainerComponent;
