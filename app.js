//ways to create objects--
//object literal notation const game = {} 


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  //initialize empty array.
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum)
  },

  
  }