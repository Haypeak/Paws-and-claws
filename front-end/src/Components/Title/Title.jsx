// import React from 'react';
import "./Title.css";
import PropTypes from 'prop-types';

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
