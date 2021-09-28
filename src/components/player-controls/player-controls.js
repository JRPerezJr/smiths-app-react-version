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

const PlayerControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <PlayerControlsContainer>
      <StyledIcon
        icon={faBackward}
        title="Previous"
        aria-label="Previous"
        onClick={onPrevClick}
      />
      {isPlaying ? (
        <StyledPlayPauseIcon
          icon={faPause}
          title="Pause"
          aria-label="Pause"
          onClick={() => onPlayPauseClick(false)}
        />
      ) : (
        <StyledPlayPauseIcon
          icon={faPlay}
          title="Play"
          aria-label="Play"
          onClick={() => onPlayPauseClick(true)}
        />
      )}
      <StyledIcon
        icon={faForward}
        title="Next"
        aria-label="Next"
        onClick={onNextClick}
      />
    </PlayerControlsContainer>
  );
};

export default PlayerControls;
