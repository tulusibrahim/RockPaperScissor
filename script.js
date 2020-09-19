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
      ? "seri"
      : you == "gunting" && outputbot == "batu"
        ? "kalah"
        : you == "gunting" && outputbot == "kertas"
          ? "menang"
          : you == "batu" && outputbot == "gunting"
            ? "menang"
            : you == "batu" && outputbot == "batu"
              ? "seri"
              : you == "batu" && outputbot == "kertas"
                ? "kalah"
                : you == "kertas" && outputbot == "gunting"
                  ? "kalah"
                  : you == "kertas" && outputbot == "batu"
                    ? "menang"
                    : you == "kertas" && outputbot == "kertas"
                      ? "seri"
                      : "";
  judgement.innerHTML = jawaban;

  if (jawaban == "menang") {
    scoreyou += 1;
    document.getElementById("scoreyou").innerHTML = scoreyou;
  } else if (jawaban == "kalah") {
    scorebot += 1;
    document.getElementById("scorebot").innerHTML = scorebot;
  }

  if (scorebot == 9 && scoreyou <= 6) {
    alert("seems like somebody gonna lose this time");
  }

  if (scorebot >= 10 || scoreyou >= 10) {
    document.querySelector("#button").disabled = true;
    setTimeout(() => {
      location.reload();
    }, 7000);
    if (scorebot >= 10) {
      judgement.innerHTML = "gameover!!! pemenangnya bott nub bgst";
    }
    if (scoreyou >= 10) {
      judgement.innerHTML = "gameover!!! pemenangnya eluu hoki bgst";
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
