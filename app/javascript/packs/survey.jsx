import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Survey = props => {
  return (
    <div>
      <input type="text" value={props.data.name} onChange={props.handleNameChange}/>
    </div>
  )
}

export default Survey
