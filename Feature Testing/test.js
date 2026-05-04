// PROJECT DATA STORAGE

const projects = {
project1: {
    webtitle: "Keegan Ouillette | Projects | Series Z",
    title: "Series Z: Zoro Roronoa",
    description: "A collection inspired by Zoro Roronoa from One Piece. The project includes a series of illustrations and character designs that explore Zoro's personality, style, and iconic moments from the series.",
    images: [
    "/A2 Ouillette Content/Series Z/ZoroWanoFight.png",
    "/A2 Ouillette Content/Series Z/ZoroWanoPrint.png",
    "/A2 Ouillette Content/Series Z/zoro-lightning-fx.svg",
    ]
},
Dinotopia: {
    webtitle: "Keegan Ouillette | Projects | Dinotopia Typeface",
    title: "Dinotopia Typeface",
    description: "A typeface inspired by the fictional language of Dinotopian Footprint Language used in the Dinotopia book series.",
    images: [
    "/A2 Ouillette Content/Dinotopia Typeface/Dinotopia Language Tablet.png",
    "/A2 Ouillette Content/Dinotopia Typeface/Jurassic Park.png",
    "/A2 Ouillette Content/Dinotopia Typeface/Welcome To Jurassic Park.png"
    ]
}
};

// INJECT PROJECT DATA INTO HTML

function loadProject(projectKey) {
const project = projects[projectKey];

document.getElementById("project-webtitle").textContent = project.webtitle;
document.getElementById("project-title").textContent = project.title;
document.getElementById("project-description").textContent = project.description;

const grid = document.getElementById("image-grid");
grid.innerHTML = "";

project.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    grid.appendChild(img);
});
}

// DETERMINE IMAGE ORIENTATION AND APPLY CLASSES

const images = document.querySelectorAll(".grid img");

images.forEach(img => {
  img.onload = () => {
    const ratio = img.naturalWidth / img.naturalHeight;

    if (ratio > 1.2) {
      img.classList.add("landscape");
    } else if (ratio < 0.8) {
      img.classList.add("portrait");
    } else {
      img.classList.add("square");
    }
  };
});