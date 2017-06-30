// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// console.log('Hello World from Webpacker')

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import Main from './main'
import SurveyData from './survey_data'

document.addEventListener('DOMContentLoaded', () => {
  // let sampleSurvey = new SurveyData(
  //         'Favorite Fruit Survey',
  //         'Which of the following is your favorite fruit?',
  //         ["Apples", "Bananas", "Oranges"]
  //       )
  // let surveys = [sampleSurvey]
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
})

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

// document.addEventListener('DOMContentLoaded', () => {
//   let string = foobar();
//   ReactDOM.render(
//     <Hello name={string} />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
