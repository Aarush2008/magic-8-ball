// Button Event Listener
document.getElementById("8-Ball").addEventListener("click", imgClicked);

// Function
function imgClicked() {
  let randNum = Math.random();
  console.log(randNum);

  // Variables
  let q1 = "does a magic 8 ball actually work?";
  let q2 = "Is Javascript awsome?";
  let question = document.getElementById("question").value.toLowerCase();

  // Specific Responses
  if (question === "") {
    document.getElementById("answer-in").innerHTML = "Please ask a question...";
  } else if (question === q1) {
    document.getElementById("answer-in").innerHTML = "How dare you doubt me?";
  } else if (question === "is javascript awesome?") {
    document.getElementById("answer-in").innerHTML = "Of Course!";
  } else {
    if (randNum < 0.2) {
      document.getElementById("answer-in").innerHTML = "Without a Doubt";
    } else if (randNum < 0.4) {
      document.getElementById("answer-in").innerHTML = "As I see it, yes";
    } else if (randNum < 0.6) {
      document.getElementById("answer-in").innerHTML =
        "Concentrate and ask again";
    } else if (randNum < 0.8) {
      document.getElementById("answer-in").innerHTML = "Don't count on it";
    } else {
      document.getElementById("answer-in").innerHTML = "Outlook not so good";
    }
  }
}
