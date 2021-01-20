//this is my code - app.js is what we learned in the walkthrough!

let capFriends = ["JUSTIN", "JORDAN", "KASANDRA", "RACHEL", "MADI"];
const friends = ["Justin", "Jordan", "Kasandra", "Rachel", "Madi"];

for (i = 0; i < friends.length; i++) {
    console.log(capFriends[i] + ":");
    for (num = 99; num > 1; num) {

        if (num > 2) {
            //num-- makes the next iteration of num (- 1)
            console.log(num + " lines of code in the file, " + num-- + " lines of code; " + friends[i] + " strikes one out, clears it all out; " + num + " lines of code in the file.");
        }
        if (num == 2) {
            //makes the 1 at the end of the line not plural
            console.log(num + " lines of code in the file, " + num-- + " lines of code; " + friends[i] + " strikes one out, clears it all out; " + num + " line of code in the file.");
        }
        if (num == 1) {
            //this if statement is put here so that when it gets to 1, it isn't plural and the song ends
            console.log(num + " line of code in the file, " + num + " line of code; " + friends[i] + " strikes it out, clears it all out; no more lines of code in the file.");
        }
    }
}
