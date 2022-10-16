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
const burgerEl = {
  mainBurgerContainer: document.querySelector(".burger"),
  burgerContainer: document.querySelector(".burger-stick-content"),
  mainStick: document.querySelector(".main-burger"),
  firstSideStick: document.querySelectorAll(".side-burger")[0],
  secondSideStick: document.querySelectorAll(".side-burger")[1],
  faqText: document.querySelector(".faq-text"),
  burgerList: document.querySelector(".burger-list"),
};
const rules = {
  firstRule: document.querySelectorAll(".burger-rules")[0],
  secondRule: document.querySelectorAll(".burger-rules")[1],
  thirdRule: document.querySelectorAll(".burger-rules")[2],
  lastRule: document.querySelectorAll(".burger-rules")[3],
};

//!  -   base properties
elements.list.style.opacity = "0";
//!  -   base properties

form.addEventListener("input", onValidationInputCheck);
function onValidationInputCheck() {
  if (elements.userItemInput.value == "") {
    elements.userItemInput.classList.remove("process");
    elements.userItemInput.classList.remove("valid");
  }
}
function validationCheck() {
  if (elements.userItemInput.value === "") {
    onBurgerAllRulesUnderline();
    elements.userItemInput.classList.add("invalid");
    elements.userItemInput.classList.remove("valid");
    rules.secondRule.classList.add("burger-rules-invalid");
    return;
  } else if (!elements.userItemInput.value.includes(",")) {
    onBurgerThirdRuleUnderline();
    elements.userItemInput.classList.add("invalid");
    elements.userItemInput.classList.remove("process");
    // alert("You must  enter at least 2 words separated by commas");
    return;
  } else if (elements.userItemInput.value.includes(";")) {
    onBurgerThirdRuleUnderline();
    return;
  }
}
function titleValidation() {
  // Title validation
  if (elements.nameInput.value !== "") {
    elements.nameInput.classList.add("valid");
  }
}
function onRulesBeforeSubmitCheck() {
  if (
    elements.userItemInput.value !== "" ||
    !elements.userItemInput.value.includes(";")
  ) {
    onBurgerRemoveSecondRule();
    onBurgerRemoveThirdRule();
    onBurgerRemoveLastRule();

    onBurgerMenujustHide();
  }
}

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  onRulesBeforeSubmitCheck();
  event.preventDefault();

  // validation check
  validationCheck();
  elements.userItemInput.classList.remove("process");
  elements.userItemInput.classList.add("valid");
  titleValidation();

  //! here is input value with items
  formElement = event.currentTarget.elements;
  inputValue = formElement.items.value;
  const userNewItems = inputValue.split(",");

  function deleteWhiteSpaces() {
    //! Удалённые пробелы
    for (var i = 0; i < userNewItems.length; i++) {
      userNewItems[i] = userNewItems[i].replace(/\s+/gim, "");
    }
  }
  deleteWhiteSpaces();

  // unique elements
  const uniqueUserItems = userNewItems.filter(
    (items, index, array) => array.indexOf(items) === index
  );

  //! randomizer
  const randomItems = Math.floor(Math.random() * userNewItems.length);
  const choosenItem = uniqueUserItems[randomItems];
  // !

  // whitespaces test
  function checkArray(uniqueUserItems) {
    for (var i = 0; i < uniqueUserItems.length; i++) {
      if (uniqueUserItems[i] === "") return false;
      onBurgerSecondRuleUnderline();
      onBurgerLastRuleUnderline();
    }
  }
  // !
  //? empty places validation, create items
  function emptyPlacesValidationandCreateItems() {
    if (checkArray(uniqueUserItems) === false) {
      elements.userItemInput.classList.remove("process");
      elements.userItemInput.classList.remove("valid");
      elements.userItemInput.classList.add("invalid");

      return;
      //
    } else {
      onBurgerRemoveSecondRule();
      onBurgerRemoveLastRule();

      //! create items
      for (let i = 0; i < uniqueUserItems.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = uniqueUserItems[i];
        listItem.classList.add("js-listItem");
        listItem.style.color = "orange";

        elements.list.append(listItem);
      }
    }
  }
  emptyPlacesValidationandCreateItems();
  function otherDecoration() {
    //! hide main
    elements.main.style.opacity = "0";
    setTimeout(() => {
      elements.main.style.display = "none";
    }, 800);

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
  otherDecoration();
}

// burger

burgerEl.burgerContainer.addEventListener("click", onBurgerMenu);
function onBurgerMenu() {
  burgerEl.mainBurgerContainer.classList.toggle("burger-animation");
  burgerEl.mainStick.classList.toggle("burger-main-anim-geometry");
  burgerEl.firstSideStick.classList.toggle("burger-side-anim-geometry");
  burgerEl.secondSideStick.classList.toggle("burger-side-anim-geometry");
  burgerEl.faqText.classList.toggle("faq-text-vanish");
  // burger dropdown
  setTimeout(() => {
    burgerEl.mainStick.classList.toggle("burger-main-anim-down-geometry");
  }, 400);

  // FAQ text styles
  if (burgerEl.mainStick.classList.contains("burger-main-anim-geometry")) {
    setTimeout(() => {
      burgerEl.burgerList.classList.add("burger-list-active");
    }, 700);
  } else if (
    !burgerEl.mainStick.classList.contains("burger-main-anim-geometry")
  ) {
    burgerEl.burgerList.classList.remove("burger-list-active");
  }
}
// just dropdown to show rules
function onBurgerMenujustShow() {
  burgerEl.mainBurgerContainer.classList.add("burger-animation");
  burgerEl.mainStick.classList.add("burger-main-anim-geometry");
  burgerEl.firstSideStick.classList.add("burger-side-anim-geometry");
  burgerEl.secondSideStick.classList.add("burger-side-anim-geometry");
  burgerEl.faqText.classList.add("faq-text-vanish");
  setTimeout(() => {
    burgerEl.mainStick.classList.add("burger-main-anim-down-geometry");
  }, 400);
  setTimeout(() => {
    burgerEl.burgerList.classList.add("burger-list-active");
  }, 700);
}
function onBurgerMenujustHide() {
  burgerEl.burgerList.classList.remove("burger-list-active");

  burgerEl.mainStick.classList.remove("burger-main-anim-down-geometry");

  setTimeout(() => {
    burgerEl.mainBurgerContainer.classList.remove("burger-animation");
    burgerEl.mainStick.classList.remove("burger-main-anim-geometry");
    burgerEl.firstSideStick.classList.remove("burger-side-anim-geometry");
    burgerEl.secondSideStick.classList.remove("burger-side-anim-geometry");
    burgerEl.faqText.classList.remove("faq-text-vanish");
  }, 300);
}
// Rule's underline
function onBurgerAllRulesUnderline() {
  onBurgerMenujustShow();
  onBurgerSecondRuleUnderline();
  onBurgerThirdRuleUnderline();
  onBurgerLastRuleUnderline();
}
function onBurgerSecondRuleUnderline() {
  onBurgerMenujustShow();
  rules.secondRule.classList.add("burger-rules-invalid");
}
function onBurgerThirdRuleUnderline() {
  onBurgerMenujustShow();
  rules.thirdRule.classList.add("burger-rules-invalid");
}
function onBurgerLastRuleUnderline() {
  onBurgerMenujustShow();
  rules.lastRule.classList.add("burger-rules-invalid");
}
// Remove function's
function onBurgerRemoveSecondRule() {
  rules.secondRule.classList.remove("burger-rules-invalid");
}
function onBurgerRemoveThirdRule() {
  rules.thirdRule.classList.remove("burger-rules-invalid");
}
function onBurgerRemoveLastRule() {
  rules.lastRule.classList.remove("burger-rules-invalid");
}
