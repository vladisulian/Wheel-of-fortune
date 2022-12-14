const select = document.querySelector("select");
const allLang = ["ru", "en", "ua"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  select.value = hash;
  document.querySelector("title").innerHTML = langArr["mainTitle"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
      document.querySelector("#firstInput").placeholder =
        langArr["firstPlaceholder"][hash];
      document.querySelector("#secondInput").placeholder =
        langArr["secondPlaceholder"][hash];
    }
  }
}
console.log();
changeLanguage();
