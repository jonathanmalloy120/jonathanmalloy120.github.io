const home = {
    repo: "https://github.com/jonathanmalloy120", name: "home"
};

const pacMan = {
    repo: "https://www.google.com/logos/2010/pacman10-i.html",
    name: "pacMan"
};
const eyes = {
    repo: "https://www.webmd.com/eye-health/picture-of-the-eyes",
    name: "eyes"
};
const projects = [home,pacMan,eyes];

function makeCard (project) {
    const newCard = document.createElement("div");
    newCard.id = project.name;
    console.log(newCard)
}

//For testing
makeCard(pacMan);