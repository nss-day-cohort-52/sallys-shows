import { Artists } from "./Artists.js"

const mainContainer = document.querySelector("#sallysShows")

// Invoke function to generate HTML for artists and inject into the DOM
mainContainer.innerHTML = Artists()
