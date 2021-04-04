import React, { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import MovieDetail from 'src/components/MovieDetail';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';

function MovieDetailView() {
  const isMountedRef = useIsMountedRef();
  const { id } = useParams();

  const [movie, setMovie] = useState();

  const getMovie = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_API}/movies/${id}`)
      .then((response) => {
        if (response && response.data) {
          setMovie(response.data);
        }
      })
      .catch(() => {

      });
  }, [isMountedRef]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <MovieDetail movie={movie} />
  );
}

export default MovieDetailView;
