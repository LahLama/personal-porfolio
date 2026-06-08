// const socialMedia = [
//   {
//     id: 1,
//     img: "/ASSETS/IMAGES/icons/github.svg",
//     name: "GitHub",
//     link: "https://www.github.com"
//   },
//   {
//     id: 2,
//     img: "/ASSETS/IMAGES/icons/linkedin.svg",
//     name: "LinkedIn",
//     link: "https://www.linkedin.com"
//   },
//   {
//     id: 3,
//     img: "/ASSETS/IMAGES/icons/twitter.svg",
//     name: "Twitter",
//     link: "https://www.twitter.com"
//   },
//   {
//     id: 4,
//     img: "/ASSETS/IMAGES/icons/itch.svg",
//     name: "Itch.io",
//     link: "https://www.itch.io"
//   },
//   {
//     id: 5,
//     img: "/ASSETS/IMAGES/icons/youtube.svg",
//     name: "YouTube",
//     link: "https://www.youtube.com"
//   }
// ];


const socialMedia = [
  {
    id: 1,
    // https://www.svgrepo.com/svg/512317/github-142
    img: "/ASSETS/IMAGES/contact/github.svg",
    name: "GitHub",
    link: "https://github.com/LahLama"
  },
  {
    id: 2,
    // https://www.svgrepo.com/svg/510045/linkedin
    img: "/ASSETS/IMAGES/contact/linkedin.svg",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/james-ihlenfeldt/"
  },
  {
    id: 3,
    // https://www.svgrepo.com/svg/512399/instagram-167
    img: "/ASSETS/IMAGES/contact/instagram.svg",
    name: "Instagram",
    link: "https://www.instagram.com/isleofjames/"
  },
  {
    id: 4,
    // https://www.svgrepo.com/svg/314217/itch-io
    img: "/ASSETS/IMAGES/contact/itch.svg",
    name: "Itch.io",
    link: "https://lahlama.itch.io/"
  },
  {
    id: 5,
    // https://www.svgrepo.com/svg/513089/youtube-168
    img: "/ASSETS/IMAGES/contact/youtube.svg",
    name: "YouTube",
    link: "https://www.youtube.com/@LahLama"
  },
  {
    id: 6,
    // https://www.svgrepo.com/svg/510129/pintrest
    img: "/ASSETS/IMAGES/contact/pintrest.svg",
    name: "Pintrest",
    link: "https://za.pinterest.com/LahLama/"
  },
  {
    id: 7,
    // https://www.svgrepo.com/svg/382949/tree-holidays-winter-newyear
    img: "/ASSETS/IMAGES/contact/linktree.svg",
    name: "Linktree",
    link: "https://linktr.ee/JamesIhlenfeldt"
  }
];

socialMedia.forEach(page => {
    // finds the skill container
    var linksContainer = document.querySelector("#circleLinks")

    // Creates new skill item div
    var newLink = document.createElement("div");
    newLink.classList.add("link")

    newLink.innerHTML = `
        <a href=${page.link} target="_blank">
            <img src=${page.img} class="imageIcon" alt="">
            <p class="hoverName tooltip"> ${page.name} </p>
        </a>
    `;

    linksContainer.append(newLink);

   
});
