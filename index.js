const main = document.querySelector("#main");
const portfolio = document.querySelector("#Portfolio");
const active = document.querySelectorAll("li");
const aboutLi = document.querySelector(".li-about");
const side = document.querySelector(".side");
const homeLi = document.querySelector(".li-home");
const contactLi = document.querySelector(".li-contact");
const portfolioLi = document.querySelector(".li-Portfolio");
const hamburger = document.querySelector("#hamburger");
const svg = document.querySelectorAll(".svg");
const svgRing = document.querySelector(".svg-ring");
const img = document.querySelector(".img");
const radio = document.querySelectorAll(" .radio");

console.log(radio);

const projects = [
  {
    title: "Restaurant Website",
    img: "./images/restaurant.gif",
    description:
      "In this project I built a website for a restaurant using frontend and backend technologies",
    link: "https://mern-restaurant.onrender.com/",
    number: 1,
  },
  {
    title: "video player",
    img: "./images/player.gif",
    description: "Project 2 description",
    link: "https://abdullaalwaki.github.io/videoplyer/",
    number: 2,
  },
  {
    title: "Project 3",
    img: "./images/Ramadantimer.gif",
    description: "Project 3 description",
    link: "https://abdullaalwaki.github.io/RamadanTimer/",
    number: 3,
  },
];

const port = `<div class="con">
<img class="img" src="${projects[0].img}" alt="" />
<div class="text">
    <h2>${projects[0].title}</h2>
    <p>${projects[0].description}</p>
    <a href="${projects[0].link}" target="_blank">View Project</a>
  </div>
</div>
<div class="img-end">
  ${projects.map((project) => {
    return `
    <label for="${project.number}" ><img class="small-img" src="${project.img}" alt="" /> </label>
    <input type="radio" name="radio" id="${project.number}" class="radio"/>`;
  })}
</div>
`;

active.forEach((link) => {
  link.addEventListener("click", () => {
    active.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-open");
  hamburger.classList.toggle("is-closed");
  if (hamburger.classList.contains("is-open")) {
    side.style.display = "flex";
    svg.forEach((svg) => {
      svg.style.background = "white";
    });
    svgRing.style.stroke = "white";
  }
  if (hamburger.classList.contains("is-closed")) {
    side.style.display = "none";
    svg.forEach((svg) => {
      svg.style.backgroundColor = "black";
    });
    svgRing.style.stroke = "black";
  }
});

const onSubmit = () => {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let text = document.querySelector("#text").value;
  const data = {
    name,
    email,
    text,
  };
  try {
    fetch("https://main-be-nv16.onrender.com/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

// log when scroll
window.addEventListener("scroll", () => {
  if (
    (window.scrollY > 0 && window.scrollY < 700) ||
    (window.scrollY > 1700 && window.scrollY < 2600)
  ) {
    side.classList.remove("side-active");
    side.classList.add("side");
  } else if (
    (window.scrollY > 700 && window.scrollY < 1700) ||
    (window.scrollY > 2600 && window.scrollY < 3100)
  ) {
    side.classList.add("side-active");
  }
  if (
    (window.scrollY > 0 &&
      window.scrollY < 640 &&
      !hamburger.classList.contains("is-open")) ||
    (window.scrollY > 2160 &&
      window.scrollY < 3040 &&
      !hamburger.classList.contains("is-open"))
  ) {
    svg.forEach((svg) => {
      svg.style.background = "black";
    });
    svgRing.style.stroke = "black";
  } else if (
    (window.scrollY > 640 &&
      window.scrollY < 2160 &&
      !hamburger.classList.contains("is-open")) ||
    (window.scrollY > 3040 &&
      window.scrollY < 3100 &&
      !hamburger.classList.contains("is-open"))
  ) {
    svg.forEach((svg) => {
      svg.style.background = "white";
    });
    svgRing.style.stroke = "white";
  }
});
