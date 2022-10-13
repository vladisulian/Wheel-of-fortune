const userItems = ["first", "second", "third"];
const randomItems = Math.floor(Math.random() * userItems.length);
const choosenItem = userItems[randomItems];
const choosenItemSliced = choosenItem.replace(/[\s,%]/g, " ");

const elements = {
  overlay: document.querySelector(".overlay-preloader"),
  main: document.querySelector("#main"),
  list: document.querySelector("#item-list"),
  newTitle: document.querySelector(".js-new-title"),
  advertisement: document.querySelector(".js-choosenItem"),
  newOrderBtn: document.querySelector(".button-link-to-index"),
  newOrderBtnLink: document.querySelector("#index-link"),
};

// button text changing
elements.newOrderBtn.addEventListener("click", onNewOrderBtn);
function onNewOrderBtn() {
  elements.newOrderBtnLink.textContent = "Relocating";
}

window.addEventListener("load", createItemList);

function createItemList() {
  //! hide preloader
  elements.overlay.style.opacity = "0";

  //! display: none to preloader
  setTimeout(() => {
    elements.overlay.style.display = "none";
  }, 1000);

  //!   create items
  for (let i = 0; i < userItems.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = userItems[i];
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
