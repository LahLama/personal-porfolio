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

const mediaQuery = window.matchMedia("(max-width: 768px)");
mediaQuery.addEventListener("change", () => handleLayout(mediaQuery));

function renderNavItem(page)
{
    const link = document.createElement("a");
    link.href = page.link;
    link.classList.add("linkRef", "center");

    const text = document.createElement("p");
    text.className = "linkName hidden";
    text.textContent = page.name.toUpperCase();

    const icon = document.createElement("img");
    icon.src = page.icon;
    icon.alt = `icon image for ${page.name}`;
    icon.className = "linkIconImage hidden";

    link.append(text, icon);

    if (page.position === "main")
    {
        link.id = "mainTitle";
    }

    return link;
}

pages.forEach(page =>
{
    const item = renderNavItem(page);

    if (page.position === "left")
    {
        navLeft.appendChild(item);
    }
    else if (page.position === "right")
    {
        navRight.appendChild(item);
    }
    else
    {
        header.appendChild(item);
    }
});

const title = header.querySelector("#mainTitle");
header.innerHTML = "";
header.append(navLeft, title, navRight);

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".linkRef").forEach(link =>
{
    const target = link.getAttribute("href")?.split("/").pop();
    if (target === currentPage)
    {
        link.classList.add("active");
    }
});

function handleLayout(mediaQuery)
{
    document.querySelectorAll(".linkRef").forEach(link =>
    {
        const icon = link.querySelector("img");
        const text = link.querySelector("p");

        if (mediaQuery.matches)
        {
            icon?.classList.remove("hidden");
            text?.classList.add("hidden");
        }
        else
        {
            icon?.classList.add("hidden");
            text?.classList.remove("hidden");
        }
    });
}

handleLayout(mediaQuery);

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Suez+One&display=swap";
document.head.appendChild(fontLink);