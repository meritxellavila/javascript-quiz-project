class Quiz {
  // YOUR CODE HERE:
  //
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }

  checkAnswer(answer) {
    // console.log(answer); //esta es la respuesta del usuario como string
    // console.log(this.questions); //esto es un array de todos lo obj de preguntas
    // console.log(this.currentQuestionIndex); // posicion de la pregunta que del momento
    //tenemos que comparar la respuesta del us contra la respuesta de la pregunta actua, si es correcta + this.correcAnswers
 let correctAnswer = this.questions[this.currentQuestionIndex] ["answer"];
    if( answer === correctAnswer){
        this.correctAnswers ++
    }
    console.log(this.correctAnswers);
    console.log(correctAnswer)
    console.log(answer)
}

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  filterQuestionsByDifficulty(easy) {}
}
