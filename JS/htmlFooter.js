pages = [

    {
        name: "home",
        link: "../index.html"
    },
    {
        name : "contact",
        link: "../HTML/contact.html"
    },
    {
        name : "games",
        link: "../HTML/games.html"
    },
    {
        name: "projects",
        link: "../HTML/projects.html"
    },
    {
        name: "reviews",
        link: "../HTML/reviews.html"
    },
]
const footer = document.querySelector("footer")

function renderSitemap()
{   
    footer.innerHTML = `        
    <section id="sitemap" >
            <h1>Sitemap</h1>
    </section>
    <section id="contact">
        <h1>Contact</h1>
        <div id="contactForm" class="center">
            <a id="email" href="mailto:jamesihlenfeldt@proton.me"> EMAIL ME HERE </a>    
        </div>
    </section>`

    const sitemapContainer = document.createElement("ol")
    sitemapContainer.textContent = "Sitemap"
    sitemapContainer.classList.add("sitemapContainer")

    pages.forEach(page => {
        const newSiteItem = renderSitemapItems(page)
        sitemapContainer.append(newSiteItem)

    });
    // footer.classList.add("classContainer")
    document.querySelector("#sitemap").append(sitemapContainer);
}

function renderSitemapItems(page)
{
    const newListItem = document.createElement("li")
    const newLink = document.createElement("a");

    newLink.setAttribute("href", page.link);
    newLink.textContent = page.name;
    
    newListItem.append(newLink)


    return newListItem
}
function renderList(item)
{
    const newItem = document.createElement("li")
    newItem.innerHTML = item;
    
    return newItem
}

renderSitemap()

