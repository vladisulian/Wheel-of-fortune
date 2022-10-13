const formEls = {
  
}

// - - - - -
const items = [
  "First item",
  "Second item",
  "Third item",
  "Fourth item",
  "Five's item",
];
const randomItems = Math.floor(Math.random() * items.length);
const choosenItem = items[randomItems];
const choosenItemSliced = choosenItem.replace(/[\s,%]/g, " ");

const elements = {
  overlay: document.querySelector(".overlay-preloader"),
  main: document.querySelector("#main"),
  list: document.querySelector("#item-list"),
  newTitle: document.querySelector(".js-new-title"),
  advertisement: document.querySelector(".js-choosenItem"),
};

window.addEventListener("load", createItemList);

function createItemList() {
  //! hide preloader
  elements.overlay.style.opacity = "0";

  //! display: none to preloader
  setTimeout(() => {
    elements.overlay.style.display = "none";
  }, 1000);

  //!   create items
  for (let i = 0; i < items.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = items[i];
    listItem.style.color = "orange";

    elements.list.append(listItem);
  }

  //!   make item list active
  setTimeout(() => {
    elements.list.style.opacity = 1;
  }, 500);

  //!   make "He will choose" active
  setTimeout(() => {
    elements.newTitle.style.opacity = "1";
  }, 1500);

  //! make choosen item
  setTimeout(() => {
    elements.advertisement.textContent = choosenItemSliced;
  }, 2700);

  // !  make choosen item active
  setTimeout(() => {
    elements.advertisement.style.opacity = "1";
  }, 3200);

  //!   change color of choosen item
  setTimeout(() => {
    elements.advertisement.style.color = "orangered";
  }, 3700);
  setTimeout(() => {
    elements.advertisement.style.color = "blue";
  }, 4300);
  setTimeout(() => {
    elements.advertisement.style.color = "orangered";
  }, 4800);
}
