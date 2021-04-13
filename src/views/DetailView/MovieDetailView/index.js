/* eslint-disable no-unused-vars */
import React, {
  useCallback, useEffect, useRef, useState
} from 'react';

import produce from 'immer';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';

import MovieDetail from 'src/components/MovieDetail';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';

function MovieDetailView() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const movieRef = useRef(movie);

  const getMovie = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/movies/${id}`);

      if (isMountedRef.current) {
        movieRef.current = response.data;
        setMovie(response.data);
      }
    } catch (err) {
      enqueueSnackbar(err.response.status, { variant: 'error' });
    }
  }, [isMountedRef]);

  const getDirector = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/movies/${id}/directors`);
      if (isMountedRef.current) {
        setMovie(produce(movieRef.current, (draft) => {
          draft.directors = response.data._embedded.names;
        }));
      }
    } catch (err) {
      if (err.response) {
        enqueueSnackbar(err.response.status, { variant: 'error' });
      }
    }
  }, [isMountedRef]);

  useEffect(() => {
    getMovie().then(getDirector);
  }, [getMovie]);

  return (
    <MovieDetail movie={movie} />
  );
}

export default MovieDetailView;
