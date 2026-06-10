function createCarousel(list, selectors)
{
    const prevButton = document.querySelector(selectors.prev);
    const nextButton = document.querySelector(selectors.next);
    const card = document.querySelector(selectors.card);

    if (!prevButton || !nextButton || !card)
    {
        console.error("Carousel: missing DOM element", selectors);
        return;
    }

    if (!Array.isArray(list) || list.length === 0)
    {
        console.error("Carousel: empty or invalid list", list);
        return;
    }

    let currentIndex = 0;

    function render(index)
    {
        const item = list[index];

        prevButton.disabled = true;
        nextButton.disabled = true;

        card.innerHTML = `
            <img class="gameImage" src="${item.img}" alt="Image of ${item.gameTitle}">
            
            <div class="infoArea">
                <h2>${item.gameTitle}</h2>
                <h5>${item.role ?? ""}</h5>
                <p>${item.description}</p>
            </div>
        `;

        if (item.link)
        {
            const link = document.createElement("a");
            link.href = item.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View it here!";

            card.querySelector(".infoArea").appendChild(link);
        }

        prevButton.disabled = false;
        nextButton.disabled = false;
    }

    nextButton.addEventListener("click", () =>
    {
        currentIndex = (currentIndex + 1) % list.length;
        render(currentIndex);
    });

    prevButton.addEventListener("click", () =>
    {
        currentIndex = (currentIndex - 1 + list.length) % list.length;
        render(currentIndex);
    });

    render(currentIndex);
}