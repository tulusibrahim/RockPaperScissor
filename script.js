var you = ["gunting", "batu", "kertas"];

function kertas() {
  document.getElementById("you").innerHTML = "kertas"
  you = "kertas"
}
function gunting() {
  document.getElementById("you").innerHTML = "gunting"
  you = "gunting"
}
function batu() {
  document.getElementById("you").innerHTML = "batu"
  you = "batu"
}


let scoreyou = 0;
let scorebot = 0;

function yuk() {
  var judgement = document.getElementById("judgement");

  var bot = ["gunting", "batu", "kertas"];
  var outputbot = bot[Math.floor(Math.random() * bot.length)];
  document.getElementById("bot").innerHTML = outputbot;

  let jawaban =
    you == "gunting" && outputbot == "gunting"
      ? "Seri"
      : you == "gunting" && outputbot == "batu"
        ? "Kalah"
        : you == "gunting" && outputbot == "kertas"
          ? "Menang"
          : you == "batu" && outputbot == "gunting"
            ? "Menang"
            : you == "batu" && outputbot == "batu"
              ? "Seri"
              : you == "batu" && outputbot == "kertas"
                ? "Kalah"
                : you == "kertas" && outputbot == "gunting"
                  ? "Kalah"
                  : you == "kertas" && outputbot == "batu"
                    ? "Menang"
                    : you == "kertas" && outputbot == "kertas"
                      ? "Seri"
                      : "";
  judgement.innerHTML = jawaban;

  if (jawaban == "Menang") {
    scoreyou += 1;
    document.getElementById("scoreyou").innerHTML = scoreyou;
  } else if (jawaban == "Kalah") {
    scorebot += 1;
    document.getElementById("scorebot").innerHTML = scorebot;
  }

  if (scorebot == 9 && scoreyou < 4) {
    alert("seems like somebody gonna lose this time");
  }

  if (scorebot >= 10 || scoreyou >= 10) {
    document.querySelector("#button").disabled = true;
    setTimeout(() => {
      location.reload();
    }, 10000);
    if (scorebot >= 10) {
      judgement.innerHTML = "It's done. I know Youre Doing Youre Best";
    }
    if (scoreyou >= 10) {
      judgement.innerHTML = "Very Well. You Wanna Rematch?";
    }
  }
}

function darkmode() {
  var button = document.getElementById("button");
  var body = document.getElementById("body");
  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    button.style.backgroundColor = "white";
    button.style.color = "black";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    button.style.backgroundColor = "black";
    button.style.color = "white";
  }
}
