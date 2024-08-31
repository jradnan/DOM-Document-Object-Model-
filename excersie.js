// Exercise-1:
// You have been given a html document.Answer the below questions with necessary code

// !DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <div class="header">
//     </div>
//     <section id="container">
//         <ul>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//             <li class="five">Five</li>

//         </ul>
//         <ol>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ol>
//     </section>
//     <div class="footer">
//     </div>
// </body>
// </html>

{/* Write the code necessary to do the following: (12) (1 per each question) */}

{/* a.Select the section with an id of container without using querySelector.
b.Select the section with an id of container using querySelector.
c.Select all of the list items with a class of "second".
d.Select a list item with a class of third, but only the list item inside of the ol tag.
e.Give the section with an id of container the text "Hello!".
f.Add the class main to the div with a class of footer.
g.Remove the class main on the div with a class of footer.
h.Create a new li element.
i.Give the li the text "four".
j.insert this li before the li with class of five */
// k.Loop over all of the lis inside the ol tag and give them a background color of "green".
// l.Remove the div with a class of footer.

}



// a.Select the section with an id of container without using querySelector.

const section = document.getElementById("container")

// b.Select the section with an id of container using querySelector.
const sectionUsingQuery = document.querySelector("#container")

// c.Select all of the list items with a class of "second".

const selectAllListElm = document.querySelectorAll(".second")
console.log(selectAllListElm);
// d.Select a list item with a class of third, but only the list item inside of the ol tag.
const classOfThird = document.body.children[1].children[1];

console.log(classOfThird);

// e.Give the section with an id of container the text "Hello!".

const li = document.createElement("li");
li.textContent = "Hello!."
section.insertAdjacentElement("beforebegin", li)

// document.getElementById('container').textContent = "Hello!";

// f.Add the class main to the div with a class of footer.

const classDiv = document.querySelector(".footer")
classDiv.classList.add("main")
console.log(classDiv);


// g.Remove the class main on the div with a class of footer.
classDiv.classList.remove("main")

// h.Create a new li element.

const newElm = document.createElement("li");

// i.Give the li the text "four".
newElm.textContent = "four";

// j.insert this li before the li with class of five
const five = document.querySelector(".five")

five.insertAdjacentElement("beforebegin", newElm)

