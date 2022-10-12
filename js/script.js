const games = [
  "Far Cry" + ",",
  "Ice Age 3" + ",",
  "Madagascar" + ",",
  "Zuma" + ",",
  "S.T.A.L.K.E.R.",
];
const randomGames = Math.floor(Math.random() * games.length);
const choosenGame = games[randomGames];
const choosenGameSliced = choosenGame.replace(/[\s,%]/g, " ");

const elements = {
  overlay: document.querySelector(".overlay-preloader"),
  main: document.querySelector("#main"),
};

window.addEventListener("load", createGameList);

function createGameList() {
  // define choosen game
  const advertisement = document.querySelector(".js-choosenGame");
  const gamesList = document.createElement("ul");
  gamesList.classList.add("js-gamesList");

  //   create gamesList
  for (let i = 0; i < games.length; i++) {
    const gamesListItem = document.createElement("li");
    gamesListItem.textContent = games[i];
    gamesListItem.classList.add("js-gamesListItem");
    gamesListItem.style.color = "orange";

    gamesList.append(gamesListItem);
    gamesList.style.opacity = 0;

    elements.main.append(gamesList);
  }

  //!   make games list active
  setTimeout(() => {
    gamesList.style.opacity = 1;
  }, 500);
  //! create 'she will choose' str (disactive)
  const newTitle = document.createElement("h2");
  newTitle.textContent = "Wheel of Fortune will give you...";
  newTitle.classList.add("js-new-title");
  newTitle.style.opacity = "0";
  elements.main.append(newTitle);

  //!   make "she will choose" active
  setTimeout(() => {
    newTitle.style.opacity = "1";
  }, 1500);

  //! make choosen game
  setTimeout(() => {
    const advertisement = document.createElement("p");
    advertisement.textContent = choosenGameSliced;
    advertisement.classList.add("js-choosenGame");
    advertisement.style.opacity = "0";
    elements.main.append(advertisement);
  }, 2700);
  // !  make choosen game active
  setTimeout(() => {
    const advertisement = document.querySelector(".js-choosenGame");
    advertisement.style.opacity = "1";
  }, 3200);
  //!   change color of choosen game
  setTimeout(() => {
    const advertisement = document.querySelector(".js-choosenGame");
    advertisement.style.color = "orangered";
  }, 3700);
  setTimeout(() => {
    const advertisement = document.querySelector(".js-choosenGame");
    advertisement.style.color = "blue";
  }, 4300);
  setTimeout(() => {
    const advertisement = document.querySelector(".js-choosenGame");
    advertisement.style.color = "orangered";
  }, 4800);
}
