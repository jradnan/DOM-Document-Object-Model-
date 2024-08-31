// const ul = document.getElementById("ul");
// const liCollection = document.getElementsByTagName("li")

// for(let li of liCollection){
//     li.style.color = "red"
//     console.log(li);
// }
// console.log(liCollection);

const h2 = document.getElementById("dom");
h2.innerText = "Hello JS";
// h1.style.color = "red"

const main = document.getElementById("main");
console.log(main);
const section = document.createElement("section");
section.innerText = "are you blind";
main.appendChild(section);

const h1 = document.createElement("h1");
h1.innerText = "This is Section";

section.appendChild(h1);

const link = document.createElement("a");
console.log(link);
link.textContent = "www.laravel.com";

const body = document.body;
body.appendChild(link);
section.classList.add("section-container");

const alu = document.body.children[1].children[1];
alu.style.color = "red";
console.log(alu);

const ul = document.getElementById("ul");
console.log(ul);
const newHTML = "<li>Apple</li>";
ul.insertAdjacentHTML("afterbegin", newHTML);
const lastHTML = "<h1>Hello dom from js</h1>";
ul.insertAdjacentHTML("afterend", lastHTML);

const btnFunc = () => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
    
  });

  const makeBlue = document.getElementById("btn");
  makeBlue.onclick = makeItBlue;

  function makeItBlue(){
    document.body.style.backgroundColor = "blue"
  }
};
