function toggleMode() {
   const html = document.documentElement

//  if(html.classList.contains("light")) {
//   html.classList.remove("light")
//  }

// else {
//  html.classList.add("light")
//  }

html.classList.toggle("light")

// pegar a tag img
const img = document.querySelector("#profile img")

// substituir a imgagem
if(html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
}

else {
    img.setAttribute("src", "./assets/avatar.png")
}

}