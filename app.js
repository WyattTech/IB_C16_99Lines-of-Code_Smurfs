// let friends  = ["Papa Smurf", "Smurfett", "Brainy Smurf" , "Greedy Smurf", "Clumsy Smurf"];

// function singers() {
//   let i;
//   for (let i = 99; i > friends.length;  i--); {
//   console.log(i + " " + "smurf berries on the vine, " + " " +  i  + " " + "smurf berries on the vine, " + friends + " picks one off, scarfs it down, clears it all out, " );
// } if (i == 1) {
//   console.log( i + " " + "smurf berry on the vine, "  + " " +  i  + " " + i + " " + "smurf berry on the vine; " + friends + "scarfs it down, clears the last one out, and now there's no more berries on the vine");
//  }
// }
// singers(friends);
//Declare an Array with Five Things
let friends = [
  "Papa Smurf",
  "Smurfette",
  "Lazy Smurf",
  "Clumsy Smurf",
  "Brainy Smurf",
];
//Loop the Array???
for (let j = 0; j < friends.length; j++) {
  //target the names in the array with its own for loop//
  console.log(friends[j]);

  for (let i = 99; i > 0; i--) {
    //target the downward count from 99 with its own for loop//
    if (i >= 2) {
      console.log(
        i +
          " " +
          "smurf berries on the vine, " +
          " " +
          i +
          " " +
          "smurf berries on the vine, " +
          friends[j] +
          " picks one off, scarfs it down, then goes to chow town on " +
          " "
      );
    } else if (i == 1) {
      console.log(
        i +
          " " +
          "smurf berry on the vine, " +
          " " +
          i +
          " " +
          "smurf berry on the vine; " +
          friends[j] +
          "scarfs it down, clears the last one out, and now there's no more berries on the vine"
      );
    }
  }
}
