import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

import {
  PlayerControlsContainer,
  StyledIcon,
  StyledPlayPauseIcon,
} from './player-controls.styles';

const PlayerControls = props => {
  const { isPlaying, playSong, pauseSong, prevSong, nextSong } = props;

  return (
    <PlayerControlsContainer>
      <StyledIcon icon={faBackward} title="Previous" onClick={prevSong} />
      {!isPlaying ? (
        <StyledPlayPauseIcon
          icon={faPlay}
          title="Play"
          onClick={isPlaying ? pauseSong : playSong}
        />
      ) : (
        <StyledPlayPauseIcon
          icon={faPause}
          title="Pause"
          onClick={isPlaying ? pauseSong : playSong}
        />
      )}
      <StyledIcon icon={faForward} title="Next" onClick={nextSong} />
    </PlayerControlsContainer>
  );
};

export default PlayerControls;
