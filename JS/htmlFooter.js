const footer = document.querySelector("footer");

function renderSitemap()
{
    footer.innerHTML = `
        <section id="sitemap">
            <h1>JAMES IHLENFELDT</h1>
        </section>

        <section id="contact">
            <h1>Contact</h1>

            <div id="contactForm" class="center">
                <a href="mailto:jamesihlenfeldt@proton.me">EMAIL ME HERE</a>
            </div>

            <p>@ James Ihlenfeldt 2026</p>
        </section>
    `;

    const sitemapContainer = document.createElement("div");
    sitemapContainer.classList.add("sitemapContainer");

    pages.forEach(page =>
    {
        sitemapContainer.appendChild(renderSitemapItem(page));
    });

    document.querySelector("#sitemap").appendChild(sitemapContainer);
}

function renderSitemapItem(page)
{
    const link = document.createElement("a");
    link.href = page.link;

    const label = page.name.toUpperCase();
    link.textContent = label === "JAMES IHLENFELDT" ? "HOME" : label;

    const icon = document.createElement("img");
    icon.src = page.icon;
    icon.alt = `icon image for ${page.name}`;
    icon.classList.add("linkIconImage");

    link.appendChild(icon);

    return link;
}

renderSitemap();