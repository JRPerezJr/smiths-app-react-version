import React, { useState, useEffect } from 'react';

import AlbumArtComponent from '../album-art-container/album-art-container';
import {
  StyledArtist,
  StyledPlayerContainer,
  StyledTitle,
} from './player-container.styles';

import baseAlbumCover from '../../assets/the_queen_is_dead.jpg';
import track1 from '../../music/The Queen Is Dead/01-TheSmiths-TheQueenIsDead.mp3';

import ProgressBar from '../progress-bar/progress-bar';
import PlayerControls from '../player-controls/player-controls';

import TRACKS from '../../data/music.data';

const PlayerContainerComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [title, setTitle] = useState(
    'The Queen Is Dead(Take Me Back To Dear Old Blightly Medley)'
  );
  const [artist, setArtist] = useState('The Smiths');
  // const [album, setAlbum] = useState('The Queen is Dead');
  const [albumCover, setAlbumCover] = useState(baseAlbumCover);
  const [trackFile, setTrackFile] = useState(track1);

  const playSong = () => {
    setIsPlaying(true);
    document.querySelector('audio').play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    document.querySelector('audio').pause();
  };

  const loadTrack = track => {
    // document.getElementById(
    //   'head'
    // ).textContent = `The Smiths Music Player | ${track.displayName}`;
    setTitle(track.title);
    setArtist(track.artist);
    // setAlbum(track.album);
    setAlbumCover(track.albumArtUrl);
    setTrackFile(track.audioUrl);
  };

  let songIndex = 0;

  const prevSong = () => {
    songIndex--;
    if (songIndex < 0) {
      songIndex = TRACKS.length - 1;
    }
    loadTrack(TRACKS[songIndex]);
    playSong();
  };

  const nextSong = () => {
    songIndex++;
    if (songIndex > TRACKS.length - 1) {
      songIndex = 0;
    }
    loadTrack(TRACKS[songIndex]);
    playSong();
  };

  useEffect(() => {
    loadTrack(TRACKS[songIndex]);
  }, []);

  return (
    <StyledPlayerContainer>
      {/* Song */}
      <AlbumArtComponent albumCover={albumCover} />
      <StyledTitle>{title}</StyledTitle>
      <StyledArtist>{artist}</StyledArtist>
      <audio src={trackFile} />
      {/* Progress */}
      <ProgressBar />
      {/* Controls */}
      <PlayerControls
        isPlaying={isPlaying}
        playSong={playSong}
        pauseSong={pauseSong}
        prevSong={prevSong}
        nextSong={nextSong}
      />
    </StyledPlayerContainer>
  );
};

export default PlayerContainerComponent;
