const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,

  //initialize empty array.
  prevGuesses: [],

  //beginning of play section: 
  play: function() {
    this.setRange()

    //Get the secretNum from the range bellow. Note on this, when not attached to anything this will refer the get global object which is the window in a browser 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this' I assume that this. in the code below refers to secretNum: null above in line 9
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum);

      //For this situation the game loop should run at least once, thus do...while loop works for this situation 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while'
    do {

      //first command: Get the player's valid guess and push it into the prevGuesses array.
      this.prevGuesses.push(this.getGuess());

      //second command: call the resetRange method, and reset the range after a guess has been made
      this.resetRange();

      //third command: call the render method and render the result of the player's guess
      this.render();

      //fourth command: if the player's last guess was not the secretNum, do it all again
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);

  },

  //beginning of getGuess function

  getGuess: function () {
    //initialize a guess variable
    let guess; 

    do {
      //assign guess as an integer value parsed from the player's input to the prompt
      guess = parseInt(
        prompt(
          `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
        )
      );
    }

  }


  }