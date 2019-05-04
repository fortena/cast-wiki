import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import { enter } from './keyEvents';
import { useStateValue } from './state';
import { searchPodcasts } from './apiActions';

// Genres endpoint
// https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres

// Limited lookup
// http://itunes.apple.com/lookup?id=173001861
// scrape information from links?

const SearchWrapper = styled.div`
  max-width: 1200px;
`;

const ResultItem = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const PodcastName = styled(Link)`
  margin: 5px;
  font-size: 28px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Host = styled.p`
  margin: 10px 5px;
`;

const GenreWrapper = styled.div`
  margin: 5px;
  display: flex;
`;

const Genre = styled.div`
  margin-right: 10px;
  padding: 4px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background: #eaeaea;
`;

const filterGenres = genres => genres.filter(genre => genre !== 'Podcasts');

const PodcastSearch = ({ history, location }) => {
  const [initialized, setInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [{ podcasts }, dispatch] = useStateValue();
  useEffect(() => {
    if (!initialized && location.search.length > 0) {
      const searchParam = decodeURI(location.search.substring(1));
      searchPodcasts(searchParam, dispatch);
    }
    setInitialized(true);
  });
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search for podcasts"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={e => {
          if (enter(e.key)) {
            history.push({ search: `${searchTerm}` });
            searchPodcasts(searchTerm, dispatch);
          }
        }}
      />
      <div>
        {podcasts.results.map(
          ({
            artistName,
            artistId,
            artworkUrl100,
            collectionId,
            genres,
            genreIds,
            primaryGenreName,
            trackName,
            trackId
          }) => (
            <ResultItem key={trackId}>
              <img src={artworkUrl100} alt="artwork" />
              <div>
                <PodcastName to={`/podcast/${collectionId}/`}>
                  {trackName}
                </PodcastName>
                <Host>{artistName}</Host>
                <GenreWrapper>
                  {filterGenres(genres).map(genre => (
                    <Genre key={genre}>{genre}</Genre>
                  ))}
                </GenreWrapper>
              </div>
            </ResultItem>
          )
        )}
      </div>
    </SearchWrapper>
  );
};

PodcastSearch.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired
};

export default PodcastSearch;