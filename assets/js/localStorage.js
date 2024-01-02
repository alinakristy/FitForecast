// Generating HTML elements as variables
const pastExerciseSlider = $("#pastExerciseSlider");

let savedExerciseTitle = localStorage.getItem("savedExerciseTitle")
  ? JSON.parse(localStorage.getItem("savedExerciseTitle"))
  : [];
let savedExerciseInstructions = localStorage.getItem(
  "savedExerciseInstructions"
)
  ? JSON.parse(localStorage.getItem("savedExerciseInstructions"))
  : [];
let savedExerciseGif = localStorage.getItem("savedExerciseGif")
  ? JSON.parse(localStorage.getItem("savedExerciseGif"))
  : [];

// Store maximum 6 exercises in local storage
while (savedExerciseTitle.length > 6) {
  savedExerciseTitle.shift();
  savedExerciseInstructions.shift();
  savedExerciseGif.shift();
}

localStorage.setItem("savedExerciseTitle", JSON.stringify(savedExerciseTitle));
localStorage.setItem(
  "savedExerciseInstructions",
  JSON.stringify(savedExerciseInstructions)
);
localStorage.setItem("savedExerciseGif", JSON.stringify(savedExerciseGif));

// Capitalizing first letters
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const pastTitleOne = $("#pastTitleOne");
const pastTitleTwo = $("#pastTitleTwo");
const pastTitleThree = $("#pastTitleThree");

pastTitleOne.text(capitalizeFirstLetter(savedExerciseTitle[0]));
pastTitleTwo.text(capitalizeFirstLetter(savedExerciseTitle[1]));
pastTitleThree.text(capitalizeFirstLetter(savedExerciseTitle[2]));

const buttonOne = $("#pastOne");
const buttonTwo = $("#pastTwo");
const buttonThree = $("#pastThree");

const pastTitle = $("#pastTitle");
const pastInstructions = $("#pastInstructions");
const pastGif = $("#pastGif");
buttonOne.on("click", function () {
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[0]));

  pastInstructions.empty();
  //create a new list with intructions for Button 1
  for (a = 0; a < savedExerciseInstructions[0].length; a++) {
    var instruction = savedExerciseInstructions[0][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[0]);

  // show past exercise slider on click
  pastExerciseSlider.removeClass("hidden");
});

buttonTwo.on("click", function () {
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[1]));

  pastInstructions.empty();
  //create a new list with intructions Button 2
  //create a new list with intructions
  for (a = 0; a < savedExerciseInstructions[1].length; a++) {
    var instruction = savedExerciseInstructions[1][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[1]);

  // show past exercise slider on click
  pastExerciseSlider.removeClass("hidden");
});

buttonThree.on("click", function () {
  pastTitle.text(capitalizeFirstLetter(savedExerciseTitle[2]));

  pastInstructions.empty();
  //create a new list with intructions Button 3
  for (a = 0; a < savedExerciseInstructions[2].length; a++) {
    var instruction = savedExerciseInstructions[2][a];
    var instr = $("<li>");
    instr.text(instruction);
    pastInstructions.append(instr);
  }

  pastGif.attr("src", savedExerciseGif[2]);

  pastInstructions.empty();

  // show past exercise slider on click
  pastExerciseSlider.removeClass("hidden");
});
