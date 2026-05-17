const button = document.getElementById("generateBtn")

button.addEventListener("click", function(){

  const title = document.getElementById("titlePreview")

  const text = document.getElementById("textPreview")

  const prompt = document.getElementById("prompt").value.toLowerCase()

  title.innerHTML = "🤖 Gerando página..."

  text.innerHTML = "A inteligência artificial está criando seu layout."

  setTimeout(() => {

    if(prompt.includes("cafeteria")){

      title.innerHTML = "☕ Cafeteria Moderna"

      text.innerHTML = "Uma landing page elegante para amantes de café."

    }

    else if(prompt.includes("academia")){

      title.innerHTML = "🏋️ Academia Fitness"

      text.innerHTML = "Um layout energético para sua academia."

    }

    else if(prompt.includes("roupa")){

      title.innerHTML = "👕 Loja de Roupas"

      text.innerHTML = "Uma página moderna para vender moda online."

    }

    else{

      title.innerHTML = "🚀 Landing Page Criada"

      text.innerHTML = "Sua inteligência artificial criou um layout incrível."

    }

  }, 2000)

})