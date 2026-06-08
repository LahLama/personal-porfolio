pages = [
        {
        name : "games",
        link: "../HTML/games.html",
        position: "left"
    },
    {
        name: "projects",
        link: "../HTML/projects.html",
        position: "left"
    },
    {
        name: "James Ihlenfeldt",
        link: "../index.html",
        position: "main"
    },
    {
        name: "reviews",
        link: "../HTML/reviews.html",
        position: "right"
    },

    {
        name : "contact",
        link: "../HTML/contact.html",
        position: "right"
        
    },
]
const header = document.querySelector("header");

const navLeft = document.createElement("div");
navLeft.className = "navLeft";

const navRight = document.createElement("div");
navRight.className = "navRight";


function renderBar(page) {
    const newLink = document.createElement("a");
    newLink.setAttribute("href", page.link);
    newLink.textContent = page.name.toUpperCase();
    if (page.position === "main") newLink.setAttribute("id", "mainTitle");
    return newLink;
}

pages.forEach(page => {
    const link = renderBar(page);
    if (page.position === "left") navLeft.appendChild(link);
    else if (page.position === "right") navRight.appendChild(link);
    else header.appendChild(link); 
});

// Build the header in the right order: left - title - right
const title = header.querySelector("#mainTitle");
header.innerHTML = ""; 
header.appendChild(navLeft);
header.appendChild(title);
header.appendChild(navRight);


const currentPage = window.location.pathname.split('/').pop(); 
console.log(currentPage);


document.querySelectorAll('header a').forEach(link => {

    
    if (link.getAttribute('href').split('/').pop() === currentPage) {
        link.classList.add('active');
    }
});



function checkWindowSize(windowSize) {
  if (windowSize.matches) { // If media query matches meaning its < 700px
    title.textContent = "JI"
  } else {
  title.textContent = "James Ihlenfeldt"
  }
}

// Create a MediaQueryList object
var windowSize = window.matchMedia("(max-width: 700px)")

// Call listener function at run time
checkWindowSize(windowSize);

// Attach listener function on state changes
windowSize.addEventListener("change", function() {
  checkWindowSize(windowSize);
});

var headPart = document.querySelector("head");
var SuezFont = document.createElement("link");

SuezFont.rel = "stylesheet";
SuezFont.href = "https://fonts.googleapis.com/css2?family=Suez+One&display=swap";

headPart.append(SuezFont);