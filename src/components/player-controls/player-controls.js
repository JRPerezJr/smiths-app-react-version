import { useContext } from 'react';

import { FavoritesContext } from '../../services/favorites/favorites.context';

import {
  faBackward,
  faForward,
  faHeart,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

import { faHeart as regHeart } from '@fortawesome/free-regular-svg-icons';

import {
  PlayerControlsContainer,
  StyledHeartIcon,
  StyledIcon,
  StyledPlayPauseIcon,
} from './player-controls.styles';

const PlayerControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  track,
}) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find(r => r.title === track.title);

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
      <StyledHeartIcon
        icon={isFavorite ? faHeart : regHeart}
        title="Add to Favorites"
        aria-label="Add to Favorites"
        onClick={() =>
          !isFavorite ? addToFavorites(track) : removeFromFavorites(track)
        }
      />
    </PlayerControlsContainer>
  );
};

export default PlayerControls;
