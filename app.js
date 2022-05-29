const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  //initialize empty array.
  prevGuesses: [],

  //starts play function: 
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

  //starts of getGuess: function

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
    } while ( //following lines: while the guess is not a number or the guess is less than smallestNum or the guess is greater than biggestNum, return the guess
      isNaN(guess) || 
      guess < this.smallestNum ||
      guess > this.biggestNum
    )
    //after loop done once, return the guess
    return guess; 
  },

  //starts setRange: function
  setRange : function() {
    do {
      //assign this.smallestNum as an integer value parsed from the player's input to the prompt
      this.smallestNum = parseInt(
        prompt(
          `Enter a number - this will be the low end of the range.`
        )
      );
    } while (isNaN(this.smallestNum)) //while this.smallestNum is not a number
    do {
      //assign this.highestNum as an integer value parsed from the player's input to the prompt
      this.biggestNum = parseInt(
        prompt(
          `Enter a number that is ${this.smallestNum +2} or more. This will be the high end of the range.`
        )
      );
    } while (//while this.higestNum is not a number or while this.highestNum isn't larger than this.smallestNum + 2 (to allow space for this.secretNum to exist)
      isNaN(this.biggestNum) ||
      this.biggestNum < this.smallestNum + 2
    )
  },
  //starts bonus part
  resetRange: function () {
    //if the last number the player entered is more than secretNum
    if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      //set the biggestNum equal to the player's last guess
      this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
    } else {
      //otherwise set the smallestNum qual to the player's last guess
      this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
    }
  },
  
  //starts render: function
  render: function(){
    //initalize a msg varible
    let msg;

    //if the player has guessed the secretNum
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      //assign the victory message to the msg varible
      msg = `Congrats! you guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? 'guesses' : 'guess'
    }!`;
    } else {
      //if not, assign the too high/low message to the msg varible 
      msg = `Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum
      ? 'high'
      : 'low'
    }/nPrevious guesses: ${this.prevGuesses.join(',')}`;
    }
  }


  }

  //call game.play and start the game

  game.place();