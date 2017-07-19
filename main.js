//Recipe Puppy API
//http://www.recipepuppy.com/about/api/
//The api is accessible at http://www.recipepuppy.com/api/.

//     "title": "Crock Pot Apple Butter",
//     "href": "http:\/\/www.recipezaar.com\/Crock-Pot-Apple-Butter-236359",
//     "ingredients": "apple cider, brown sugar, granny smith apple, cinnamon, cloves, nutmeg, lemon juice",
//     "thumbnail": ""

let searchBox = document.getElementById("searchBox")
let list = document.getElementById("list")
let searchTerm = ""
let recipe = []

const searchBar = document.createElement("input")
const button = document.createElement("button")
button.textContent = "Search"
searchBar.setAttribute("type", "search")
searchBar.className = "searchCSS"
button.className = "searchButton"

searchBox.appendChild(searchBar)
searchBox.appendChild(button)

button.addEventListener("click", function() {
  searchTerm += searchBar.value
  let URL = `https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchTerm}`

  const promise = fetch(URL).then(response => response.json()).then(data => {
    data.results.forEach(recipe => {
      const searchResult = document.createElement("li")

      const title = document.createElement("a")
      title.href = recipe.href
      title.textContent = recipe.title
      searchResult.appendChild(title)

      const img = document.createElement("img")
      img.src = recipe.thumbnail
      if (recipe.thumbnail === "") {
        img.src = "http://via.placeholder.com/115x115?text=Yummy!"
      }
      searchResult.appendChild(img)

      list.appendChild(searchResult)
    })
  })
})
