import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import SurveyData from './survey_data'
import SurveyList from './survey_list'
import SurveyEditor from './survey_editor'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      surveyDatas: props.surveys,
      editing: false,
      index: 0
    }
  }

  startEdit(index) {
    this.setState({editing: true, index: index})
  }

  changeSurveys(func) { //This will safely mutate a copy of state and then change state
    let surveysCopy = this.state.surveyDatas.slice()
    func(surveysCopy)
    this.setState({surveyDatas: surveysCopy});
  }

  handleNameChange(event) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].name = event.target.value
    })
  }

  handleQuestionChange(event) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].question = event.target.value
    })
  }

  handleChoiceChange(event, index) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].choices[index] = event.target.value
    })
  }

  handleNewChoice() {
    let number = this.state.surveyDatas[this.state.index].choices.length + 1
    let choiceString = 'choice ' + number.toString()
    this.changeSurveys(surveys => {
      surveys[this.state.index].choices.push(choiceString)
    })
  }

  handleDeleteChoice(index) {
    this.changeSurveys(surveys => {
      surveys[this.state.index].choices.splice(index, 1)
    })
  }

  handleNewSurvey() {
    this.changeSurveys(surveys => {
      surveys.push(new SurveyData('New Survey'))
    })
  }

  handleDeleteSurvey() {
    this.changeSurveys(surveys => {
      surveys.splice(this.state.index, 1)
    })
    this.setState({editing: false})
  }

  render() {
    return (
      <div>
        <SurveyList
          surveys={this.state.surveyDatas}
          editing={this.state.editing}
          index={this.state.index}
          startEdit={(index) => {this.startEdit(index)}}
          handleNewSurvey={() => {this.handleNewSurvey()}}
        />
        <SurveyEditor
          editing={this.state.editing}
          survey={this.state.surveyDatas[this.state.index]}
          handleNameChange={event => {this.handleNameChange(event)}}
          handleDeleteSurvey={event => {this.handleDeleteSurvey()}}
          handleQuestionChange={event => {this.handleQuestionChange(event)}}
          handleChoiceChange={(event, index) => {this.handleChoiceChange(event,index)}}
          handleNewChoice={() => {this.handleNewChoice()}}
          handleDeleteChoice={index => {this.handleDeleteChoice(index)}}
        />
      </div>
    )
  }
}

export default Main
