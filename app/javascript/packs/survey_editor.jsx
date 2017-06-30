import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const SurveyEditor = props => {
  if (props.editing) {
    let choices = props.survey.choices.map((choice, index) => {
      return (
        <div className="list-item" key={index}>
          <input type="text"
            value={choice}
            onChange={event => {props.handleChoiceChange(event, index)}}
          />
          <button onClick={() => {props.handleDeleteChoice(index)}}>Delete</button>
        </div>
      )
    })
    return (
      <div className='editor'>
        <h3>Editing
          <input type="text"
            value={props.survey.name}
            onChange={props.handleNameChange}
          />
          <button onClick={props.handleDeleteSurvey}>Delete</button>
        </h3>
        <textarea
          value={props.survey.question}
          onChange={props.handleQuestionChange}
        />
        {choices}
        <div className="list-item" onClick={props.handleNewChoice}>Add New Choice</div>
      </div>
    )
  } else {
    return <div className='editor'></div>
  }
}

export default SurveyEditor
