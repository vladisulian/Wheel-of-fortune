const form = document.querySelector(".order-form");

const elements = {
  main: document.querySelector("#main"),
  list: document.querySelector("#item-list"),
  newTitle: document.querySelector(".js-new-title"),
  advertisement: document.querySelector(".js-choosenItem"),
  newOrderBtn: document.querySelector(".button-link-to-index"),
  newOrderBtnLink: document.querySelector("#index-link"),
  firstLabel: form.firstElementChild,
  secondLabel: document.querySelector("#itemList-label"),
  nameInput: document.querySelector("input[name='name']"),
  userItemInput: document.querySelector("input[name='items']"),
};
//!  - - - - -    base properties
elements.list.style.opacity = "0";
//!  - - - - -    base properties

form.addEventListener("input", onValidationCheck);
function onValidationCheck() {
  if (elements.userItemInput.value != "") {
    elements.userItemInput.classList.remove("invalid");
    elements.userItemInput.classList.add("process");
    // console.log("Go to");
  }
}

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  // validation check
  if (elements.userItemInput.value === "") {
    elements.userItemInput.classList.add("invalid");
    elements.userItemInput.classList.remove("valid");
    // console.log("Invalid  ");
    alert("You need to fill this fields");
    return;
  } else if (!elements.userItemInput.value.includes(",")) {
    alert("You must enter at least 2 words separated by commas");
    elements.userItemInput.classList.add("invalid");
    elements.userItemInput.classList.remove("process");
    return;
  }
  //! unexpected symbols
  else if (
    elements.userItemInput.value.includes(";") ||
    elements.userItemInput.value == "," ||
    elements.userItemInput.value.includes(".")
  ) {
    alert("Unexpected symbols");
    return;
  }
  elements.userItemInput.classList.remove("process");
  elements.userItemInput.classList.add("valid");

  // Title validation
  if (elements.nameInput.value != "") {
    elements.nameInput.classList.add("valid");
  }

  formElement = event.currentTarget.elements;
  inputValue = formElement.items.value;
  const userNewItems = inputValue.split(",");
  const uniqueUserItems = userNewItems.filter(
    (items, index, array) => array.indexOf(items) === index
  );

  console.log("Массив введённых пользователем элементов", userNewItems);
  console.log("Массив уникальных элементов", uniqueUserItems);
  console.log("Количество уникальных элементы", uniqueUserItems.length);
  function withoutProbels(item) {
    return uniqueUserItems.replace(/(?<=,.+)\s+/g, "");
  }
  console.log(
    "Массив уникальных элементов после удаления свободного места",
    uniqueUserItems
  );

  //! randomizer
  const randomItems = Math.floor(Math.random() * uniqueUserItems.length);
  const choosenItem = uniqueUserItems[randomItems];
  // console.log("RandomItems:", randomItems);
  // console.log("ChoosenItem", choosenItem);

  //! hide main
  elements.main.style.opacity = "0";
  setTimeout(() => {
    elements.main.style.display = "none";
  }, 800);
  //! create items
  if (uniqueUserItems.length >= 2) {
    for (let i = 0; i < uniqueUserItems.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = uniqueUserItems[i];
      listItem.classList.add("js-listItem");
      listItem.style.color = "orange";

      elements.list.append(listItem);
    }
  } else {
    alert("Please enter not same text");
    location.reload();
  }

  //!   make item list active
  setTimeout(() => {
    elements.list.style.opacity = "1";
  }, 700);
  //!   make "he will give you..." active
  setTimeout(() => {
    elements.newTitle.style.opacity = "1";
  }, 1500);

  //! make choosen item
  setTimeout(() => {
    elements.advertisement.textContent = choosenItem;
  }, 2700);

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
