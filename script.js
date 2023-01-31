const containerEl = document.querySelector(".container");
const works = ["Student", "Teacher", "Freelancer", "Intern"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${
    works[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${works[careerIndex].slice(0, characterIndex)} </h1>`;

  if (characterIndex === works[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === works.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
