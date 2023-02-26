async function getPhotographers () {
  // Penser à remplacer par les données récupérées dans le json
  let json = []
  try {
    const response = await fetch('/data/photographers.json')
    json = await response.json()
    console.log(json)
  } catch (error) {
    console.error(error)
  }
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...json.photographers]
  }
}

async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init () {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
