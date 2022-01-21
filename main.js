console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

document.getElementById("node1").innerText = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

document.getElementsByClassName("node2") [0].innerHTML = 'I used the getElementByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3Nodes = document.getElementsByTagName("h3");
for (let node of h3Nodes) {
    node.innerText = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newP = document.createElement("p");
newP.innerText = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parent2 = document.getElementById("parent");
parent2.appendChild(newP);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let newA = document.createElement("a");
newA.textContent = "I am a <a> tag"; 

// BONUS: Add a link href to the <a>
newA.href = "https://truecoders.io";
newA.target = "_blank";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent2.insertBefore(newA, newP);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let parent3 = document.getElementById("exercise-container3");
let newerP = document.createElement("p");
newerP.textContent = "New Child Node";
let refChild = document.getElementById("N1");
parent3.replaceChild(newerP, refChild);

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(move, 10);

let interval = setInterval(move, 10);
let box = document.getElementById("box");
let container = document.getElementById("container");
let posX = 0; 
let posY = 0;
let isX = true;
let dir = 1;

function animate() {
//what axis and what direction

    switch(true) {
        case isX && dir > 0:
            moveX();
            break;
        case !isX && dir > 0:
            moveY();
            break;
        case isX && dir < 0:
            moveX();
        break;
        case !isx && dir > 0:
            moveY();
        break;
    }

    function moveX(unit) {
        posX+= dir;
        box.style.left = posX + "px";
        if (posX >= container.clientWidth - box.clientWidth) {
            isX = false;
        } else if (posX == 0) {
            isx = false;
        }
    }

    function moveY(unit) {
        posY += dir;
        box.style.top = posY + "px";
        if (posY >= container.clientHeight - box.clientHeight) {
            isx = true;
            dir = -1;
        } else if (posY == 0) {
            isX = true;
            dir = 1;
        }
    }
}

function move() {
    posX++;
    box.style.left = posX + "px";
    // Stop animation from left to right if box's right side is flush wiht container
    if (posX >= container.clientWidth - box.clientWidth) {
        clearInterval(interval);
    }
}





// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

function show() {
document.getElementById("btn").removeEventListener("click", show);

let backdrop = document.createElement("div");
backdrop.id = "modal";

let div = document.createElement("div");

// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// div.innerHTML = "<p>Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user</p>";
let p = document.createElement("p");
p.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
div.appendChild(p);

let btn = document.createElement("button");
btn.textContent = "Close";
btn.onclick = close;
div.appendChild(btn);

div.classList.add("modal-card");

// div.style = "position fixed; top: 0; margin-top: 3rem; max-width: 600px; width: 100%; border-radius: 8px; background-color: #eee; color: #222;";

backdrop.appendChild(div);

document.getElementById("root").appendChild(backdrop);

function close() {
    document.getElementById("root").removeChild(backdrop);
    document.getElementById("btn").addEventListener("click", show);
}
// This div should be a 'modal' that covers the main content on the screen



// BONUS: The modal popup should be able to be closed. Refactor for this functionality
}
document.getElementById("btn").addEventListener("click", show);