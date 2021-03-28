import React from 'react';
import MovieCard from 'src/components/MovieCard';

function HomeView() {
  const movie = {
    poster: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    title: 'Justice League'
  };

  return (
    <MovieCard movie={movie} />
  );
}

export default HomeView;
