//Collapsible accordion component
const menus = document.querySelectorAll(".title");
const openText = document.querySelectorAll(".myText");
menus.forEach((el) => {
    el.addEventListener("click", (e) => {
        console.log(el.nextElementSibling);
        remover();
        el.nextElementSibling.classList.toggle("active");
    })
})
function remover() {
    openText.forEach((ele) => {
        ele.classList.remove("active");
    })
} 


//Interative voting system 
window.onload = build;
const myArray = ["Laurence", "Mike", "John", "Larry"];
const message = document.getElementById("message");
const addNew = document.getElementById("addNew");
const newInput = document.getElementById("addFriend");
const output = document.getElementById("output");
addNew.onclick = function () {
    const newFriend = newInput.value;
    adder(newFriend, myArray.length, 0);
    myArray.push(newFriend);
}
function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0);
    });
}
function adder(name, index, counter) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.classList.add("box");
    td1.textContent = index + 1;
    const td2 = document.createElement("td");
    td2.textContent = name;
    const td3 = document.createElement("td");
    td3.textContent = counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.onclick= function () {
        console.log(tr.lastChild);
        let val = Number(tr.lastChild.textContent);
        val++;
        tr.lastChild.textContent = val;
    }
    output.appendChild(tr);
}

//Hangman game
const game = { cur: "", solution: "", puzz: [], total: 0 };
        const myWords = ["learn Javascript", "learn html", "learn css"];
        const score = document.querySelector(".score");
        const puzzle = document.querySelector(".puzzle");
        const letters = document.querySelector(".letters");
        const btn = document.querySelector("button");
        btn.addEventListener("click", startGame);
        function startGame() {
            if (myWords.length > 0) {
                btn.style.display = "none";
                game.puzz = [];
                game.total = 0;
                game.cur = myWords.shift();
                game.solution = game.cur.split("");
                builder();
            } else {
                score.textContent = "No More Words.";
            }
        }
        function createElements(elType, parentEle, output, cla) {
            const temp = document.createElement(elType);
            temp.classList.add("boxE");
            parentEle.append(temp);
            temp.textContent = output;
            return temp;
        }
        function updateScore() {
            score.textContent = `Total Letters Left : ${game.total}`;
            if (game.total <= 0) {
                console.log("game over");
                score.textContent = "Game Over";
                btn.style.display = "block";
            }
        }
        function builder() {
            letters.innerHTML = "";
            puzzle.innerHTML = "";
            game.solution.forEach((lett) => {
                let div = createElements("div", puzzle, "-", "boxE");
                if (lett == " ") {
                    div.style.borderColor = "white";
                    div.textContent = " ";
                } else {
                    game.total++;
                }
                game.puzz.push(div);
                updateScore();
            });
            for (let i = 0; i < 26; i++) {
                let temp = String.fromCharCode(65 + i);
                let div = createElements("div", letters, temp,"box");
  
                let checker = function (e) {
                    div.style.backgroundColor = "#ddd";
                    div.classList.remove("box");
                    div.classList.add("boxD");
                    div.removeEventListener("click", checker);
                    checkLetter(temp);
                }
                div.addEventListener("click", checker);
            }
        }
        function checkLetter(letter) {
            console.log(letter);
            game.solution.forEach((ele, index) => {
                if (ele.toUpperCase() == letter) {
                    game.puzz[index].textContent = letter;
                    game.total--;
                    updateScore();
                };
            });
        }

