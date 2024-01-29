class Question {
    // YOUR CODE HERE:
    //
constructor (text, choices, answer, difficulty){
 this.text = text
 this.choices = choices
 this.answer = answer
 this.difficulty = difficulty
}
shuffleChoices() {
    //let randomShuffle = this.choices.length, randomChoices;  
    //let randomChoices = Math.floor(Math.random() * randomShuffle)

        for (let i = this.choices.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.choices[i];
            this.choices[i] = this.choices[j];
            this.choices[j] = temp;
        }
    }
}