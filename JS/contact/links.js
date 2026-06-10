const socialMedia = [
    {
        id: 1,
        img: `${BASE}ASSETS/IMAGES/contact/github.svg`,
        name: "GitHub",
        link: "https://github.com/LahLama"
    },
    {
        id: 2,
        img: `${BASE}ASSETS/IMAGES/contact/linkedin.svg`,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/james-ihlenfeldt/"
    },
    {
        id: 3,
        img: `${BASE}ASSETS/IMAGES/contact/instagram.svg`,
        name: "Instagram",
        link: "https://www.instagram.com/isleofjames/"
    },
    {
        id: 4,
        img: `${BASE}ASSETS/IMAGES/contact/itch.svg`,
        name: "Itch.io",
        link: "https://lahlama.itch.io/"
    },
    {
        id: 5,
        img: `${BASE}ASSETS/IMAGES/contact/youtube.svg`,
        name: "YouTube",
        link: "https://www.youtube.com/@LahLama"
    },
    {
        id: 6,
        img: `${BASE}ASSETS/IMAGES/contact/pintrest.svg`,
        name: "Pinterest",
        link: "https://za.pinterest.com/LahLama/"
    },
    {
        id: 7,
        img: `${BASE}ASSETS/IMAGES/contact/linktree.svg`,
        name: "Linktree",
        link: "https://linktr.ee/JamesIhlenfeldt"
    }
];

const linksContainer = document.querySelector("#circleLinks");

socialMedia.forEach(({ img, name, link }) =>
{
    const newLink = document.createElement("div");
    newLink.classList.add("link");

    newLink.innerHTML = `
        <a href="${link}" target="_blank" >
            <img src="${img}" class="imageIcon" alt="Link to ${name}">
            <p class="hoverName tooltip">${name}</p>
        </a>
    `;

    linksContainer.appendChild(newLink);
});