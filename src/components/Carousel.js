import React from 'react';

import { makeStyles } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
  arrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 60,
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0,0,0,.5)',
    color: theme.palette.common.white,
    zIndex: 1,
    '&.prevArrow': {
      left: 0,
      justifyContent: 'flex-start',
      background:
            ' linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,37,0) 100%)',
      opacity: ({ currentSlide }) => (currentSlide ? 1 : 0)
    },
    '&.nextArrow': {
      right: 0,
      justifyContent: 'flex-end',
      background:
            ' linear-gradient(90deg, rgba(0,0,37,0) 0%, rgba(0,0,0,1) 100%)',
      opacity: ({ currentSlide, slideCount }) => (currentSlide === slideCount ? 0 : 1)
    }
  },
}));

function NextArrow({ currentSlide, slideCount, onClick }) {
  const classes = useStyles({ currentSlide, slideCount });
  return (
    <div className={classnames(classes.arrow, 'nextArrow')} onClick={onClick}>
      <ArrowForwardIos color="inherit" fontSize="large" />
    </div>
  );
}

NextArrow.propTypes = {
  currentSlide: PropTypes.any,
  slideCount: PropTypes.number,
  onClick: PropTypes.func
};

function PrevArrow({ currentSlide, onClick }) {
  const classes = useStyles({ currentSlide });
  return (
    <div className={classnames(classes.arrow, 'prevArrow')} onClick={onClick}>
      <ArrowBackIos color="inherit" fontSize="large" />
    </div>
  );
}

PrevArrow.propTypes = {
  currentSlide: PropTypes.any,
  onClick: PropTypes.func
};

function Carousel({ items }) {
  const classes = useStyles();
  const settings = {
    centerMode: true,
    infinite: items.length > 4,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className={classes.slider}>
      {items.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </Slider>
  );
}

Carousel.propTypes = {
  items: PropTypes.array
};

export default Carousel;
