const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById("result-artist")
const resultPlaylist = document.getElementById("result-playlist")

function requestApi(searchTerm) {
  const url = `http://localhost:5500/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}
function displayResults(result) {
  const artistName = document.getElementById("artist-name")
  const artistImage = document.getElementById("artist-img")
  resultPlaylist.style.display = "none"

  result.forEach((element) => {
    artistName.innerText = element.name
    artistImage.src = element.urlImg
  })

  resultPlaylist.style.display = "none"
}
document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm === "") {
    resultPlaylist.style.display = "grid"
    resultsArtist.style.display = "none"
    return
  }
  resultPlaylist.style.display = "none"
  resultsArtist.style.display = "grid"
  
  requestApi(searchTerm)
})