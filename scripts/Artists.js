import { getArtists } from "./database.js"

const artistArray = getArtists()

export const Artists = () => {
  let artistHTML = "<ol>"

  for (const artistObj of artistArray) {
    artistHTML += `
      <li>
        ${artistObj.name}
      </li>
    `
  }

  artistHTML += "</ol>"

  return artistHTML

}
