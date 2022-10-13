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
    formElement = event.currentTarget.elements;
    inputValue = formElement.items.value;

    // не менять очерёдность
    console.log("Пользователь ввёл:", inputValue);
    console.log("Было:", userItems);
    console.log("Изначально", userItems);
    userItems.push(inputValue.split("")); //! Если включить - то нужно смотреть userItems[0]
    userItems.push(input.value);
    console.log("User Items", userItems);
    // console.log("Стало:", userItems[0]);

    //! randomizer
    const randomItems = Math.floor(Math.random() * userItems.length);
    const choosenItem = userItems[randomItems];
    choosenItem.replace(/[\s,%]/g, "");

    alert(choosenItem.replace(/[\s,%]/g, " "));
    console.log("Items:", userItems);
    console.log("Random items:", randomItems);
    console.log("Choosen item:", choosenItem);
    // console.log("Choosen item sliced:", choosenItemSliced);
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
    //!   make "he will give you..." active
    setTimeout(() => {
      elements.newTitle.style.opacity = "1";
    }, 1500);

    // !  make choosen item active
    setTimeout(() => {
      elements.advertisement.style.opacity = "1";
    }, 3200);
  }
}

// - - - - -
// вырезанная функция

// вырезанная функция

// РАНДОМАЙЗЕР
//! randomizer
// const randomItems = Math.floor(Math.random() * userItems.length);
// const choosenItem = userItems[randomItems];
// const choosenItemSliced = choosenItem.replace(/[\s,%]/g, " ");
