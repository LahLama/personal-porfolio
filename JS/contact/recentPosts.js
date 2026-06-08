const latestPosts = [
  {
    id: 1,
    name: "Instagram - Latest Post",
    img: "/ASSETS/IMAGES/contact/posts/instagram.png",
    caption: "What a great day yesterday!  Literally an unforgettable experience!  The group plan finally made it out of the group chat 😂🔥",
    link: "https://www.instagram.com/p/DYbzh16CL9n/?img_index=1"
  },
  {
    id: 2,
    name: "LinkedIn - Latest Post",
    img: "/ASSETS/IMAGES/contact/posts/linkedin.png",
    caption: "I’ve spent the past week settling into the creative flow at Lama Rama Cafe. This was for the purposes of learning how to use Figma and to delve deeper into incorporating JS into modifying the CSS and HTML of the website.   I’ve included the reference image I created in the comments below.  What's your favorite drink? For me it has to be a Hug in a Mug.☕🍵  #WebDevelopment #Javascript #UIUX #Figma #FrontEndDev #LamaRamaCafe #CodingJourney",
    link: "https://www.linkedin.com/posts/james-ihlenfeldt_webdevelopment-javascript-uiux-ugcPost-7433897985731825664-L2xm/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-QUAUB1vnjXs7HOfF-2262yK39iLIlxSw"
  },
  
  {
    id: 3,
    name: "Itch.io - Latest Post",
    img: "/ASSETS/IMAGES/contact/posts/itch.png",
    caption: "Colour Switch  A simple colour switching prototype made in just 24 hours.   Not meant to be a full game, just a little proof of concept :D  if you do decide to check it out, let me know how you found it :D.",
    link: "https://lahlama.itch.io/colour-switch"
  }
];

latestPosts.forEach(page => {
    // finds the skill container
    var postsContainer = document.querySelector("#recentPosts")

    // Creates new skill item div
    var newPost = document.createElement("a");
    newPost.classList.add("mediaPage")
    newPost.classList.add("center")
    newPost.setAttribute("href", page.link)

    newPost.innerHTML = `
        <h2> ${page.name} </h2>
        <img src=${page.img} height="256px" width="256px">
        <p> ${page.caption} </p>
    `;

    postsContainer.append(newPost);

   
});
