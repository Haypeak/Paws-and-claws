// import React from 'react';
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
  // eslint-disable-next-line no-undef
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line no-undef
  subTitle: PropTypes.string.isRequired
}

export default Title
