// import React from 'react';
import PropTypes from 'prop-types';
import "./Title.css";

// eslint-disable-next-line react/prop-types
const Title = ({title, subTitle}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default Title
