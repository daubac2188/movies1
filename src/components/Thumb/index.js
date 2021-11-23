import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.style";

const Thumb = ({ image, clickable, movieId }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
};
export default Thumb;
