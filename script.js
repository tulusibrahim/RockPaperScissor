let scoreyou = 0;
let scorebot = 0;

function yuk() {
  var judgement = document.getElementById("judgement");

  var you = ["gunting", "batu", "kertas"];
  var outputyou = you[Math.floor(Math.random() * you.length)];
  document.getElementById("you").innerHTML = outputyou;

  var bot = ["gunting", "batu", "kertas"];
  var outputbot = bot[Math.floor(Math.random() * bot.length)];
  document.getElementById("bot").innerHTML = outputbot;

  let jawaban =
    outputyou == "gunting" && outputbot == "gunting"
      ? "seri"
      : outputyou == "gunting" && outputbot == "batu"
      ? "kalah"
      : outputyou == "gunting" && outputbot == "kertas"
      ? "menang"
      : outputyou == "batu" && outputbot == "gunting"
      ? "menang"
      : outputyou == "batu" && outputbot == "batu"
      ? "seri"
      : outputyou == "batu" && outputbot == "kertas"
      ? "kalah"
      : outputyou == "kertas" && outputbot == "gunting"
      ? "kalah"
      : outputyou == "kertas" && outputbot == "batu"
      ? "menang"
      : outputyou == "kertas" && outputbot == "kertas"
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
  var body = document.getElementById("content");
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
