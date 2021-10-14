import { getArtists } from "./database.js"

// Invoke function to get copy of artist object array
const artistArray = getArtists()

document.addEventListener(
  "click",
  (theActualClickEvent) => {
    // Get the element the user clicked
    const elementClickedOn = theActualClickEvent.target

    if (elementClickedOn.id.startsWith("the--artist--")) {
      // Get the primary key from the id attribute string
      const [, , artistId] = elementClickedOn.id.split('--')   // "2"

      // Go get the actual object from the database that has that primary key
      for (const artist of artistArray) {
        if (artist.id === parseInt(artistId)) {
          // Get the website property from that object
          // Display website in an alert
          window.alert(`The artist's website is ${artist.website}`)
        }
      }
    }
  }
)

const buildHTMLListItem = (artist) => {
  return `
    <li id="the--artist--${artist.id}">
      ${artist.name}
    </li>
  `
}

/*
  RESPONSIBILITY:
  Produce HTML representation of artist objects
*/
export const Artists = () => {
  let artistHTML = "<ol>"

  for (const artistObj of artistArray) {
    artistHTML += buildHTMLListItem(artistObj)
  }

  artistHTML += "</ol>"

  return artistHTML
}
