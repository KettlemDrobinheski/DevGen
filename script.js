const button = document.getElementById("generateBtn")

button.addEventListener("click", function(){

  const title = document.getElementById("titlePreview")

  const text = document.getElementById("textPreview")

  title.innerHTML = "Landing page criada com sucesso!"

  text.innerHTML = "Sua inteligência artificial gerou um layout moderno."
})