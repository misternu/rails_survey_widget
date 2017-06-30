class SurveyData {
  constructor(name = 'New Survey', question = '', choices = []) {
    this.name = name;
    this.question = question;
    this.choices = choices;
  }
}

export default SurveyData
