function scrollProjects(direction) {
    const projectCards = document.getElementById("projectCards");
    projectCards.scrollBy({ left: direction * 200, behavior: "smooth" });
}

function scrollBooks(direction) {
    const bookCovers = document.getElementById("bookCovers");
    bookCovers.scrollBy({ left: direction * 200, behavior: "smooth" });
}
