//Email extractor
// const firstArea = document.querySelector("textarea[name='txtarea']");
// const secArea = document.querySelector("textarea[name='txtarea2']");
// document.querySelector("button").addEventListener("click", lookUp);
// function lookUp() {
//     const rawTxt = firstArea.value;
//     const eData = rawTxt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
//     const holder = [];
//     for (let x = 0; x < eData.length; x++) {
//         if (holder.indexOf(eData[x]) == -1) {
//             holder.push(eData[x]);
//         }
//     }
//     secArea.value = holder.join(',');
// } 

//Form validator
// const myForm = document.querySelector("form");
// const inputs = document.querySelectorAll("input");
// const errors = document.querySelectorAll(".error");
// const required = ["email", "userName"];
// myForm.addEventListener("submit", validation);
// function validation(e) {
//     let data = {};
//     e.preventDefault();
//     errors.forEach(function (item) {
//         item.classList.add("hide");
//     });
//     let error = false;
//     inputs.forEach(function (el) {
//         let tempName = el.getAttribute("name");
//         if (tempName != null) {
//             el.style.borderColor = "#ddd";
//             if (el.value.length == 0 && required.includes(tempName)) {
//                 addError(el, "Required Field", tempName);
//                 error = true;
//             }
//             if (tempName == "email") {
//                 let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
//                 let result = exp.test(el.value);
//                 if (!result) {
//                     addError(el, "Invalid Email", tempName);
//                     error = true;
//                 }
//             }
//             if (tempName == "password") {
//                 let exp = /[A-Za-z0-9]+$/;
//                 let result = exp.test(el.value);
//                 if (!result) {
//                     addError(el, "Only numbers and Letters", tempName);
//                     error = true;
//                 }
//                 if (!(el.value.length > 3 && el.value.length < 9)) {
//                     addError(el, "Needs to be between 3-8 characters", tempName);
//                     error = true;
//                 }
//             }
//             data[tempName] = el.value;
//         }
//     });
//     if (!error) {
//         myForm.submit();
//     }
// }

// function addError(el, mes, fieldName) {
//     let temp = el.nextElementSibling;
//     temp.classList.remove("hide");
//     temp.textContent = fieldName.toUpperCase() + " " + mes;
//     el.style.borderColor = "red";
//     el.focus();
// } 


//Simple math quiz 
// const app = function () {
//     const game = {};
//     const val1 = document.querySelector(".val1");
//     const val2 = document.querySelector(".val2");
//     const output = document.querySelector(".output");
//     const answer = document.querySelector("input");
//     function init() {
//         document.querySelector("button").addEventListener("click", checker);
//         loadQuestion();
//     }
//     function ranValue(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     function loadQuestion() {
//         game.val1 = ranValue(1, 100);
//         game.val2 = ranValue(1, 100);
//         game.answer = game.val1 + game.val2;
//         val1.textContent = game.val1;
//         val2.textContent = game.val2;
//     }
//     function checker() {
//         let bg = answer.value == game.answer ? "green" : "red";
//         output.innerHTML +=
//             `<div style="color:${bg}">${game.val1} + ${game.val2} = ${game.answer} (${answer.value})</div>`;
//         answer.value = "";
//         loadQuestion();
//     }
//     return {
//         init: init
//     };
// }();
// document.addEventListener('DOMContentLoaded', app.init);