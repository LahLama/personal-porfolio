const latestPosts = [
    {
        id: 0,
        name: "LinkedIn - Latest Post",
        img: `${BASE}ASSETS/IMAGES/contact/posts/linkedin.webp`,
        caption: "I’ve spent the past week settling into the creative flow at Lama Rama Cafe. This was for the purposes of learning how to use Figma and to delve deeper into incorporating JS into modifying the CSS and HTML of the website. I’ve included the reference image I created in the comments below. What's your favourite drink? For me it has to be a Hug in a Mug.☕🍵 #WebDevelopment #Javascript #UIUX #Figma #FrontEndDev #LamaRamaCafe #CodingJourney",
        link: "https://www.linkedin.com/posts/james-ihlenfeldt_webdevelopment-javascript-uiux-ugcPost-7433897985731825664-L2xm/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-QUAUB1vnjXs7HOfF-2262yK39iLIlxSw"
    },
    {
        id: 1,
        name: "Itch.io - Latest Post",
        img: `${BASE}ASSETS/IMAGES/contact/posts/itch.webp`,
        caption: "Colour Switch A simple colour switching prototype made in just 24 hours. Not meant to be a full game, just a little proof of concept :D If you do decide to check it out, let me know how you found it :D.",
        link: "https://lahlama.itch.io/colour-switch"
    }
];

const postsContainer = document.querySelector("#recentPosts");

latestPosts.forEach(({ name, img, caption, link }) =>
{
    const newPost = document.createElement("a");
    newPost.className = "mediaPage center";
    newPost.href = link;
    newPost.target = "_blank";
    newPost.rel = "noopener noreferrer";

    newPost.innerHTML = `
        <h2>${name}</h2>
        <img src="${img}" alt="${caption}" class="postImage">
        <p>${caption}</p>
    `;

    postsContainer.appendChild(newPost);
});