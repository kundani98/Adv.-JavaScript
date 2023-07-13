//Build your own analytics
// const counter = [];  
// const main = document.querySelector(".container");
// main.addEventListener("click",tracker);
// function tracker(e){
//     const el = e.target;
//     if(el.id){
//     const temp = {};
//     temp.content = el.textContent;
//     temp.id = el.id;
//     temp.tagName = el.tagName;
//     temp.class = el.className;
//     console.dir(el);
//     counter.push(temp);
//     console.log(counter);
//     }
// }

//Star rating system
const starsUL = document.querySelector(".stars");
const output = document.querySelector(".output");
const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
    star.starValue = (index + 1);
    star.addEventListener("click", starRate);
});
function starRate(e) {
    output.innerHTML = `You Rated this ${e.target.starValue} stars`;
    stars.forEach((star, index) => {
        if (index < e.target.starValue) {
            star.classList.add("orange");
        } else {
            star.classList.remove("orange");
        }
    });
}

// //Mouse position tracker
// const ele = document.querySelector(".holder");
// ele.addEventListener("mouseover", (e) => { e.target.classList.add("active"); });
// ele.addEventListener("mouseout", (e) => { e.target.classList.remove("active"); });
// ele.addEventListener("mousemove", coordin);
// function coordin() {
//     let html = "X:" + event.clientX + " | Y:" + event.clientY;
//     document.getElementById("output").innerHTML = html;
// }

//Box clicker speed test game
// const output = document.querySelector('.output');
// const message = document.querySelector('.message');
// message.textContent = "Press to Start";
// const box = document.createElement('div');
// const game = {
//     timer: 0,
//     start: null
// };
// box.classList.add('box');
// output.append(box);

// box.addEventListener('click', (e) => {
//     box.textContent = "";
//     box.style.display = 'none';
//     game.timer = setTimeout(addBox, ranNum(3000));
//     if (!game.start) {
//         message.textContent = 'Loading....';
//     } else {
//         const cur = new Date().getTime();
//         const dur = (cur - game.start) / 1000;
//         message.textContent = `It took ${dur} seconds to click`;
//     }
// });

// function addBox() {
//     message.textContent = 'Click it...';
//     game.start = new Date().getTime();
//     box.style.display = 'block';
//     box.style.left = ranNum(450) + 'px';
//     box.style.top = ranNum(450) + 'px';
// }

// function ranNum(max) {
//     return Math.floor(Math.random() * max);
// }