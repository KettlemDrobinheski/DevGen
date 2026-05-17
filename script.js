const button = document.getElementById("generateBtn")

button.addEventListener("click", function(){

  const title = document.getElementById("titlePreview")

  const text = document.getElementById("textPreview")

  const prompt = document.getElementById("prompt").value.toLowerCase()

  title.innerHTML = "🤖 Gerando página..."

  text.innerHTML = "A inteligência artificial está criando seu layout."

  setTimeout(() => {

    if(prompt.includes("cafeteria")){

      document.body.style.background = "#3b2416"

      title.innerHTML = "☕ Cafeteria Moderna"

      text.innerHTML = "Uma landing page elegante para amantes de café."

    }

    else if(prompt.includes("academia")){

      document.body.style.background = "#3a0d0d"

      title.innerHTML = "🏋️ Academia Fitness"

      text.innerHTML = "Um layout energético para sua academia."

    }

    else if(prompt.includes("roupa")){

      document.body.style.background = "#2b103d"

      title.innerHTML = "👕 Loja de Roupas"

      text.innerHTML = "Uma página moderna para vender moda online."

    }

    else{

      document.body.style.background = "#0f172a"

      title.innerHTML = "🚀 Landing Page Criada"

      text.innerHTML = "Sua inteligência artificial criou um layout incrível."

    }

  }, 2000)

})