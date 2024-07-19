// index.html page

if (location.href.includes("index.html")) {
  let gameArray = [];
  let pickedName = ["scissors", "paper", "rock", "lizard", "spock"];
  let random1PickedName = ["paper", "rock", "scissors", "spock", "scissors"];
  let random2PickedName = ["lizard", "spock", "lizard", "paper", "rock"];

  document.querySelectorAll(".game > div").forEach((game) => {
    gameArray.push(game);

    game.onclick = function () {
      document.querySelector(".game").classList.add("none");
      document.querySelectorAll(".game > div").forEach((game) => {
        game.classList.add("disabled");
      });

      document.querySelector(".pick").classList.add("active");

      this.classList.remove("disabled");
      this.classList.add("active");
      document.querySelector(".active .image").classList.add("active");

      let makeRandom = document.createElement("div");
      makeRandom.className = "make-random";
      document.querySelector(".game").appendChild(makeRandom);
      setTimeout(() => {
        document.querySelector(".make-random").remove();
      }, 2000);

      let randomImage = Math.floor(Math.random() * gameArray.length);

      setTimeout(() => {
        let randomBox = document.createElement("div");
        randomBox.className = `${gameArray[randomImage].className} random-active`;
        let image = document.createElement("div");
        image.className = "image active";
        randomBox.appendChild(image);
        let imgGame = document.createElement("img");
        imgGame.src = gameArray[randomImage].children[0].children[0].src;
        imgGame.alt = gameArray[randomImage].children[0].children[0].alt;
        image.appendChild(imgGame);
        randomBox.classList.add("random-active");
        randomBox.classList.remove("disabled");
        document.querySelector(".game").appendChild(randomBox);

        // console.log(this);
        // console.log(randomBox);
        setTimeout(() => {
          // console.log(this.className.split(" ")[0]);
          // console.log(randomBox.className.split(" ")[0]);

          // if (this.className.split(" ")[0] === "scissors") {
          //   pickName(this, randomBox, "scissors", "paper", "lizard");
          // }
          // if (this.className.split(" ")[0] === "paper") {
          //   pickName(this, randomBox, "paper", "rock", "spock");
          // }
          // if (this.className.split(" ")[0] === "rock") {
          //   pickName(this, randomBox, "rock", "scissors", "lizard");
          // }
          // if (this.className.split(" ")[0] === "lizard") {
          //   pickName(this, randomBox, "lizard", "spock", "paper");
          // }
          // if (this.className.split(" ")[0] === "spock") {
          //   pickName(this, randomBox, "spock", "scissors", "rock");
          // }

          for (let i = 0; i < pickName.length; i++) {
            if (this.className.split(" ")[0] === pickedName[i]) {
              pickName(
                this,
                randomBox,
                pickedName[i],
                random1PickedName[i],
                random2PickedName[i]
              );
            }
          }

          document.querySelector(".pick").classList.add("the-result");
          this.classList.add("the-result");
          randomBox.classList.add("the-result");
          document.querySelector("#play").classList.add("active");
        }, 1000);
      }, 2000);
    };
  });

  play();

  document.querySelector("#rule").onclick = function () {

    let overlay = document.createElement("div");

    overlay.className = "overlay";
    let imageBox = document.createElement("div");
    imageBox.className = "image";
    overlay.appendChild(imageBox);
    let name = document.createElement("div");
    name.className = "name";
    imageBox.appendChild(name);
    let text = document.createElement("p");
    text.textContent = "Rules";
    name.appendChild(text);
    let remove = document.createElement("img");
    remove.className = "remove";
    remove.src = "./images/icon-close.svg";
    name.appendChild(remove);
    let ruleImage = document.createElement("img");
    ruleImage.className = "rule-image";
    setTimeout(() => {
      imageBox.classList.add("active");
      ruleImage.classList.add("active");
    }, 1000);
    ruleImage.src = "./images/image-rules-bonus.svg";
    ruleImage.alt = "image-of-rule";
    imageBox.appendChild(ruleImage);
    document.body.appendChild(overlay);
  }
} else {
  let gameArray = [];
  let pickedName = ["scissors", "paper", "rock"];
  let randomPickedName = ["paper", "rock", "scissors"];

  document.querySelectorAll(".game > div").forEach((game) => {
    gameArray.push(game);
    game.onclick = function () {
      document.querySelector(".game").classList.add("none");
      document.querySelectorAll(".game > div").forEach((game) => {
        game.classList.add("disabled");
      });

      document.querySelector(".pick").classList.add("active");

      this.classList.remove("disabled");
      this.classList.add("active");
      document.querySelector(".active .image").classList.add("active");

      let makeRandom = document.createElement("div");
      makeRandom.className = "make-random";
      document.querySelector(".game").appendChild(makeRandom);
      setTimeout(() => {
        document.querySelector(".make-random").remove();
      }, 2000);

      let randomImage = Math.floor(Math.random() * gameArray.length);

      setTimeout(() => {
        let randomBox = document.createElement("div");
        randomBox.className = `${gameArray[randomImage].className} random-active`;
        let image = document.createElement("div");
        image.className = "image active";
        randomBox.appendChild(image);
        let imgGame = document.createElement("img");
        imgGame.src = gameArray[randomImage].children[0].children[0].src;
        imgGame.alt = gameArray[randomImage].children[0].children[0].alt;
        image.appendChild(imgGame);
        randomBox.classList.add("random-active");
        randomBox.classList.remove("disabled");
        document.querySelector(".game").appendChild(randomBox);

        setTimeout(() => {
          for (let i = 0; i < pickName.length; i++) {
            if (this.className.split(" ")[0] === pickedName[i]) {
              pickName(this, randomBox, pickedName[i], randomPickedName[i]);
            }
          }

          document.querySelector(".pick").classList.add("the-result");
          this.classList.add("the-result");
          randomBox.classList.add("the-result");
          document.querySelector("#play").classList.add("active");
        }, 1000);
      }, 2000);
    };

    play();

    document.querySelector("#rule").onclick = function () {

    let overlay = document.createElement("div");

    overlay.className = "overlay";
    let imageBox = document.createElement("div");
    imageBox.className = "image";
    overlay.appendChild(imageBox);
    let name = document.createElement("div");
    name.className = "name";
    imageBox.appendChild(name);
    let text = document.createElement("p");
    text.textContent = "Rules";
    name.appendChild(text);
    let remove = document.createElement("img");
    remove.className = "remove";
    remove.src = "./images/icon-close.svg";
    name.appendChild(remove);
    let ruleImage = document.createElement("img");
    ruleImage.className = "rule-image";
    setTimeout(() => {
      imageBox.classList.add("active");
      ruleImage.classList.add("active");
    }, 1000);
    ruleImage.src = "./images/image-rules.svg";
    ruleImage.alt = "image-of-rule";
    imageBox.appendChild(ruleImage);
    document.body.appendChild(overlay);
  };
  });
}

// index.html page function make random when you pick
function pickName(thisName, randomBox, thePick, random1, random2) {
  if (thisName.className.split(" ")[0] === randomBox.className.split(" ")[0]) {
    document.querySelector(".draw").classList.add("active");
  } else {
    document.querySelector(".lose").classList.add("active");
  }
  if (
    thisName.className.split(" ")[0] === thePick &&
    (randomBox.className.split(" ")[0] === random1 ||
      randomBox.className.split(" ")[0] === random2)
  ) {
    document.querySelector(".win").classList.add("active");
    document.querySelector(".lose").classList.remove("active");
  }
  let score = document.querySelector(".score .num");

  if (document.querySelector(".lose").classList.contains("active") === true) {
    +score.innerHTML--;
    if (+score.innerHTML <= 0) {
      score.innerHTML = 0;
    }
    randomBox.classList.add("winner");
    randomBox.children[0].classList.add("winner");
  }
  if (document.querySelector(".win").classList.contains("active") === true) {
    score.innerHTML++;
    thisName.classList.add("winner");
    thisName.children[0].classList.add("winner");
  }
}

// original.html page function make random when you pick
function original(thisName, randomBox, thePick, random) {
  if (thisName.className.split(" ")[0] === randomBox.className.split(" ")[0]) {
    document.querySelector(".draw").classList.add("active");
  } else {
    document.querySelector(".lose").classList.add("active");
  }
  if (
    thisName.className.split(" ")[0] === thePick &&
    randomBox.className.split(" ")[0] === random
  ) {
    document.querySelector(".win").classList.add("active");
    document.querySelector(".lose").classList.remove("active");
  }
  let score = document.querySelector(".score .num");

  if (document.querySelector(".lose").classList.contains("active") === true) {
    +score.innerHTML--;
    if (+score.innerHTML <= 0) {
      score.innerHTML = 0;
    }
    randomBox.classList.add("winner");
    randomBox.children[0].classList.add("winner");
  }
  if (document.querySelector(".win").classList.contains("active") === true) {
    score.innerHTML++;
    thisName.classList.add("winner");
    thisName.children[0].classList.add("winner");
  }
}

function play() {
  document.querySelector("#play").onclick = function () {
    document.querySelector(".game").classList.remove("none");
    document.querySelectorAll(".game > div").forEach((game) => {
      game.classList.remove("disabled");
      game.classList.remove("active");
      game.classList.remove("the-result");
      game.classList.remove("winner");
      game.children[0].classList.remove("winner");
    });
    document.querySelector(".random-active").remove();
    document.querySelector(".pick").classList.remove("active");
    document.querySelectorAll(".result p").forEach((result) => {
      result.classList.remove("active");
    });

    this.classList.remove("active");
  };
}

function rule(img) {
  document.querySelector("#rule").onclick = function () {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    let imageBox = document.createElement("div");
    imageBox.className = "image";
    overlay.appendChild(imageBox);
    let name = document.createElement("div");
    name.className = "name";
    imageBox.appendChild(name);
    let text = document.createElement("p");
    text.textContent = "Rules";
    name.appendChild(text);
    let remove = document.createElement("img");
    remove.className = "remove";
    remove.src = "./images/icon-close.svg";
    name.appendChild(remove);
    let ruleImage = document.createElement("img");
    ruleImage.className = "rule-image";
    setTimeout(() => {
      imageBox.classList.add("active");
      ruleImage.classList.add("active");
    }, 1000);
    ruleImage.src = img;
    ruleImage.alt = "image-of-rule";
    imageBox.appendChild(ruleImage);
    document.body.appendChild(overlay);
  };
}

document.addEventListener("click", (e) => {
  if (e.target.className === "remove") {
    document.querySelector(".overlay").remove();
  }
});
