function createCarousel(list, selectors) {
  let currentIndex_ = 0;

  const prevButton_ = document.querySelector(selectors.prev);
  const nextButton_ = document.querySelector(selectors.next);
  const card_ = document.querySelector(selectors.card);

  function render(index) {

    prevButton_.disabled = true;
    nextButton_.disabled = true;

    if (!prevButton_ || !nextButton_ || !card_) {
    console.error("Carousel: missing DOM element", selectors);
    return;
}

if (!list || list.length === 0) return;
    const item_ = list[index];

    card_.innerHTML = `
    <img class="gameImage" src="${item_.img}">
    <div class="infoArea" >
        <h2> ${item_.gameTitle} </h2>
        <h5> ${item_.role}</h5>
        <p> ${item_.description}</p>
        
    </div>
    `;    

    if (item_.link != "")
    {
      const newRedirect = document.createElement("a");
      newRedirect.setAttribute("href", item_.link);
      newRedirect.setAttribute("target", "_blank")
      newRedirect.textContent = "View it here!"

      card_.querySelector(".infoArea").append(newRedirect);
    }

      prevButton_.disabled = false;
      nextButton_.disabled = false;

  }

  nextButton_.addEventListener("click", () => {
    currentIndex_ = (currentIndex_ + 1) % list.length;
    render(currentIndex_);
  });

  prevButton_.addEventListener("click", () => {
    currentIndex_ = (currentIndex_ - 1 + list.length) % list.length;
    render(currentIndex_);
  });

  render(currentIndex_);


}