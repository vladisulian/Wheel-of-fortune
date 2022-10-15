const form = document.querySelector(".order-form");

const elements = {
  main: document.querySelector("#main"),
  list: document.querySelector("#item-list"),
  newTitle: document.querySelector(".js-new-title"),
  advertisement: document.querySelector(".js-choosenItem"),
  newOrderBtn: document.querySelector(".button-link-to-index"),
  newOrderBtnLink: document.querySelector("#index-link"),
  firstLabel: form.firstElementChild,
  nameInput: document.querySelector("input[name='name']"),
  userItemInput: document.querySelector("input[name='items']"),
};
console.log(elements.firstLabel);

//!  - - - - -    base properties
elements.list.style.opacity = "0";
//!  - - - - -    base properties
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  if (elements.userItemInput.value === "") {
    alert("You need to fill this fields");
    return;
  }
  formElement = event.currentTarget.elements;
  inputValue = formElement.items.value;

  // test
  // console.log("FormElement", formElement);
  // console.log("InputValue replaced ','", inputValue.replace(/[\s,%]/g, " "));
  // console.log("InputValue splitted ','", inputValue.split(","));
  //   console.log("UserItems pushed", userItems);
  // - - - - -

  //! randomizer
  const randomItems = Math.floor(Math.random() * inputValue.split(",").length);
  const choosenItem = inputValue.split(",")[randomItems];
  // console.log("RandomItems:", randomItems);
  // console.log("ChoosenItem", choosenItem);

  //! make choosen item
  setTimeout(() => {
    elements.advertisement.textContent = choosenItem;
  }, 2700);

  //! hide main
  elements.main.style.opacity = "0";
  setTimeout(() => {
    elements.main.style.display = "none";
  }, 800);
  //! create items
  for (let i = 0; i < inputValue.split(",").length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = inputValue.split(",")[i];
    listItem.classList.add("js-listItem");
    listItem.style.color = "orange";

    elements.list.append(listItem);
  }
  //!   make item list active
  setTimeout(() => {
    elements.list.style.opacity = "1";
  }, 700);
  //!   make "he will give you..." active
  setTimeout(() => {
    elements.newTitle.style.opacity = "1";
  }, 1500);

  // !  make choosen item active and give index-linkBtn display block
  setTimeout(() => {
    elements.advertisement.style.opacity = "1";
    elements.newOrderBtn.style.display = "inline-block";
  }, 3200);
  // ! make btn active
  setTimeout(() => {
    elements.newOrderBtn.style.opacity = "1";
  }, 4000);
  //!   change color of choosen game
  setTimeout(() => {
    const advertisement = document.querySelector(".js-choosenItem");
    advertisement.style.color = "orangered";
  }, 3700);
  setTimeout(() => {
    const advertisement = document.querySelector(".js-choosenItem");
    advertisement.style.color = "blue";
  }, 4300);
  setTimeout(() => {
    const advertisement = document.querySelector(".js-choosenItem");
    advertisement.style.color = "orangered";
  }, 4800);
}
