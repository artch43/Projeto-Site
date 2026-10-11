function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if(html.classList.contains('light')) {
  //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.jpg')
  } else {
    //se nao tiver light mode, manter a img normal
    img.setAttribute('src', './assets/avatar.png')
  }
}