const footer = document.querySelector("footer")

function renderSitemap()
{   
    footer.innerHTML = `        
    <section id="sitemap" >
            <h1>JAMES IHLENFLEDT</h1>
    </section>
    <section id="contact">
        <h1>Contact</h1>
        <div id="contactForm" class="center">
            <a id="email" href="mailto:jamesihlenfeldt@proton.me"> EMAIL ME HERE </a>
        </div>
        
        <p>@ James Ihlenfeldt 2026</p>
    </section>`

    const sitemapContainer = document.createElement("div")
   
    sitemapContainer.classList.add("sitemapContainer")

    pages.forEach(page => {
        const newSiteItem = renderSitemapItems(page)
        sitemapContainer.append(newSiteItem)

    });

    document.querySelector("#sitemap").append(sitemapContainer);
}

function renderSitemapItems(page)
{
   
    const newLink = document.createElement("a");
    
    const newLinkIcon = document.createElement("img");
    newLinkIcon.setAttribute("src", page.icon);
    newLinkIcon.setAttribute("alt", "icon image for " + page.name);
    newLinkIcon.classList.add("linkIconImage")
   

    newLink.setAttribute("href", page.link);
    newLink.textContent = page.name.toUpperCase()
    if (newLink.textContent == "JAMES IHLENFELDT")
        newLink.textContent = "HOME"

   
    newLink.append(newLinkIcon)
    


    return newLink
}
function renderList(item)
{
    const newItem = document.createElement("a")
    newItem.innerHTML = item;
    
    return newItem
}

renderSitemap()

