const form = document.querySelector(".order-form");
const input = form[0];

const userItems = [];

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (input.value === "") {
    alert("You need to fill this area");
  } else {
    formElement = event.currentTarget.elements;
    inputValue = formElement.items.value;

    console.log("Пользователь ввёл:", inputValue);
    console.log("Было:", userItems);
    userItems.push(inputValue.split(","));
    console.log("Стало:", userItems);
  }
}

// - - - - -
