//Specifying events

//Specifying events with HTML: <p id="unique" onclick="magic()">Click here for magic!</p>

//Specifying events with JavaScript:document.getElementById("unique").onclick = function() { magic(); };

//Specifying events with event listeners:document.getElementById("unique").addEventListener("click", magic);

//practice exercise 11.1 
// let darkMode = false;
// window.onclick = () => {
//     console.log(darkMode);
//     if (!darkMode) {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         darkMode = true;
//     } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         darkMode = false;
//     }
// }


// //Practice excercise 11.2  

// const divs = document.querySelectorAll("div");

// divs.forEach((el)=>{
//     el.addEventListener("click",()=>{
//         document.body.style.backgroundColor = el.textContent;
//     });
// });

// //Practice excercise 11.3
// document.addEventListener("DOMContentLoaded", (e) => {
//     message("Document ready", e);
// });
// window.onload = (e) => {
//     message("Window ready", e);
// }
// function message(val, event) {
//     console.log(event);
//     console.log(val);
// } 

//Practice excercise 11.4 
const output = document.querySelector(".output");
output.textContent = "hello world";
output.style.height = "200px";
output.style.width = "400px";
output.style.backgroundColor = "red";
output.addEventListener("mousedown", function (e) {
    message("green", e);
});
output.addEventListener("mouseover", function (e) {
    message("red", e);
});
output.addEventListener("mouseout", function (e) {
    message("yellow", e);
});
output.addEventListener("mouseup", function (e) {
    message("blue", e);
});
function message(elColor, event) {
    console.log(event.type);
    output.style.backgroundColor = elColor;
}

//Practice excercise 11.5 
const myInput = document.querySelector("input[name='message']");
        const output = document.querySelector(".output");
        const btn1 = document.querySelector(".btn1");
        const btn2 = document.querySelector(".btn2");
        const btn3 = document.querySelector(".btn3");
        const log = [];
        btn1.addEventListener("click", tracker);
        btn2.addEventListener("click", tracker);
        btn3.addEventListener("click", (e) => {
            console.log(log);
        });
        function tracker(e) {
            output.textContent = myInput.value;
            const ev = e.target;
            console.dir(ev);
            const temp = {
                message: myInput.value,
                type: ev.type,
                class: ev.className,
                tag: ev.tagName
            };
            log.push(temp);
            myInput.value = "";
        }

//Practice excercise 11.6 
