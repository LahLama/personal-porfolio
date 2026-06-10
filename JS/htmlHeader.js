  window.BASE = window.location.pathname.includes("/HTML/")
    ? "../"
    : "./";

const pages = [
  {
    name: "games",
    link: `${BASE}HTML/games.html`,
    position: "left",
    icon: `${BASE}ASSETS/IMAGES/prefabs/games.svg`
  },
  {
    name: "projects",
    link: `${BASE}HTML/projects.html`,
    position: "left",
    icon: `${BASE}ASSETS/IMAGES/prefabs/projects.svg`
  },
  {
    name: "James Ihlenfeldt",
    link: `${BASE}index.html`,
    position: "main",
    icon: `${BASE}ASSETS/IMAGES/prefabs/JI.svg`
  },
  {
    name: "reviews",
    link: `${BASE}HTML/reviews.html`,
    position: "right",
    icon: `${BASE}ASSETS/IMAGES/prefabs/ratings.svg`
  },
  {
    name: "contact",
    link: `${BASE}HTML/contact.html`,
    position: "right",
    icon: `${BASE}ASSETS/IMAGES/prefabs/contact.svg`
  }
];

const header = document.querySelector("header");

const navLeft = document.createElement("div");
navLeft.className = "navLeft";

const navRight = document.createElement("div");
navRight.className = "navRight";

// Create a MediaQueryList object
var windowSize = window.matchMedia("(max-width: 768px)")

// Attach listener function on state changes
windowSize.addEventListener("change", function() {
  checkWindowSize(windowSize);
});



function renderBar(page) {
    const newLink = document.createElement("a");
    newLink.setAttribute("href", page.link);

    const linkName = document.createElement("p");
    linkName.classList.add("linkName");
    linkName.classList.add("hidden")
    linkName.classList.toggle("hidden")
    linkName.textContent = page.name.toUpperCase();
    newLink.append(linkName);

    const newLinkIcon = document.createElement("img");
    newLinkIcon.setAttribute("src", page.icon);
    newLinkIcon.setAttribute("alt", "icon image for " + page.name);
    newLink.classList.add("linkRef")
    
    newLinkIcon.classList.add("linkIconImage");
    newLinkIcon.classList.add("hidden")
    newLink.append(newLinkIcon);

    newLink.classList.add("center")

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


document.querySelectorAll('.linkRef').forEach(link => {

    
    if (link.getAttribute('href').split('/').pop() === currentPage) {
        link.classList.add('active');
    }
});



function checkWindowSize(windowSize) {
    
    var navButtons = document.querySelectorAll(".linkRef");
    
    
  
  
    if (windowSize.matches) 
    { // If media query matches meaning its < 700px

     document.querySelectorAll(".linkRef").forEach(element => {
        
      
        var icon = element.querySelector('img')
        if (icon)
            icon.classList.remove("hidden")
         var name = element.querySelector('p')
        if (name)
            name.classList.add("hidden");
        
        
     });
     
    } 
  else 
    {

      document.querySelectorAll(".linkRef").forEach(element => {
        
        var icon = element.querySelector('img')
        if (icon)
            icon.classList.add("hidden")
         var name = element.querySelector('p')
        if (name)
            name.classList.remove("hidden");
        
        
     });
     
    }
    
}


// Call listener function at run time
checkWindowSize(windowSize);


var headPart = document.querySelector("head");
var SuezFont = document.createElement("link");

SuezFont.rel = "stylesheet";
SuezFont.href = "https://fonts.googleapis.com/css2?family=Suez+One&display=swap";

headPart.append(SuezFont);