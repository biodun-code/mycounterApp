//document.getElementById("count-el").innerText = 5;
// ctrl+k+c for commenting
// initiallize the count as 0
// listen for clicks on increment button
// increment the count variable when the button is clicked
// change the coun-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

// create a function save which log out the count when it is called

function save() {
  let countStr = count + " - ";

  saveEl.textContent += countStr;
  countEl.textContent = 0
  count = 0
  console.log(count);
}
