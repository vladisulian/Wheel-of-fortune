const form = document.querySelector(".order-form");
const input = form[0];

const elements = {
  main: document.querySelector("#main"),
  list: document.querySelector("#item-list"),
  newTitle: document.querySelector(".js-new-title"),
  advertisement: document.querySelector(".js-choosenItem"),
  newOrderBtn: document.querySelector(".button-link-to-index"),
  newOrderBtnLink: document.querySelector("#index-link"),
};

//!  - - - - -    base properties
elements.list.style.opacity = "0";
//!  - - - - -    base properties
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (input.value === "") {
    return;
    alert("You need to fill this area");
  } else {
    const userItems = [];
    formElement = event.currentTarget.elements;
    inputValue = formElement.items.value;

    // не менять очерёдность
    console.log("Пользователь ввёл:", inputValue);
    console.log("Было:", userItems);
    userItems.push(inputValue.split(","));
    console.log("Стало:", userItems);

    //! hide main
    elements.main.style.opacity = "0";
    setTimeout(() => {
      elements.main.style.display = "none";
    }, 800);
    //! create items
    for (let i = 0; i < userItems.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = userItems[i];
      listItem.style.color = "orange";

      elements.list.append(listItem);
    }

    //!   make item list active
    setTimeout(() => {
      elements.list.style.opacity = "1";
    }, 700);

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
  }
}

// - - - - -

function createItemList() {
  //   //! hide preloader
  //   elements.overlay.style.opacity = "0";

  //! display: none to preloader
  //   setTimeout(() => {
  //     elements.overlay.style.display = "none";
  //   }, 1000);

  //!   create items
  //   for (let i = 0; i < userItems.length; i++) {
  //     const listItem = document.createElement("li");
  //     listItem.textContent = userItems[i];
  //     listItem.style.color = "orange";

  //     elements.list.append(listItem);
  //   }

  //   //!   make item list active
  //   setTimeout(() => {
  //     elements.list.style.opacity = 1;
  //   }, 500);

  //   //!   make "He will choose" active
  //   setTimeout(() => {
  //     elements.newTitle.style.opacity = "1";
  //   }, 1500);

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

// РАНДОМАЙЗЕР

//! randomizer
// const randomItems = Math.floor(Math.random() * userItems.length);
// const choosenItem = userItems[randomItems];
// const choosenItemSliced = choosenItem.replace(/[\s,%]/g, " ");
