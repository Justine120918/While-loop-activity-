const correctNumber = 3;
let guess;

while (guess !== correctNumber) {
    guess = Number(prompt("Guess a number between 1 and 10:"));

        if (guess > correctNumber) {
            console.log("Too high!");
              } else if (guess < correctNumber) {
                  console.log("Too low!");
                    } else if (guess === correctNumber) {
                        console.log("Correct!");
                          }
                          }
