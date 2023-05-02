// Magic 8 Ball By Alexander

// elements
let ballImg = document.getElementById("ball-img");
let output = document.getElementById("output");
let inputBox = document.getElementById("q-input");

// event listeners
ballImg.addEventListener("click", run);

function run() {
  checkQuestion(inputBox.value);
}

function checkQuestion(question) {
  console.log(question);
  if (question == "") {
    output.innerHTML = "Please ask a question...";
  } else if (question == "does a magic 8 ball actually work?") {
    output.innerHTML = "How dare you doubt me!";
  } else if (question == "Is JavaScript awesome?") {
    output.innerHTML = "Of corse!";
  } else {
    randomResponse();
  }
}

function randomResponse() {
  let response;
  let randNum = Math.random();
  console.log(randNum);
  if (randNum >= 0.8) {
    response = "Without a doubt";
  } else if (randNum < 0.8 && randNum > 0.6) {
    response = "As i see it, yes.";
  } else if (randNum < 0.6 && randNum > 0.4) {
    response = "Concentrate and ask again";
  } else if (randNum < 0.4 && randNum > 0.2) {
    response = "Don't count on it";
  } else if (randNum < 0.2) {
    response = "Outlook not so good";
  }
  output.innerHTML = response;
}
