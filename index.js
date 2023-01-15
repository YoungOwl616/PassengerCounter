let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function add() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let presentCount = count + " - ";
    saveEl.textContent += presentCount;

    count = 0;
    countEl.textContent = "0";
}

function clearBtn() {
    saveEl.textContent = "Previous entries: ";

    count = 0;
    countEl.textContent = "0";

}