async function getPhotographers () {
  let json = []
  try {
    const response = await fetch('../../data/photographers.json')
    json = await response.json()
  } catch (error) {
    console.error(error)
  }
  return {
    photographers: [...json.photographers]
  }
}

async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  // Pour chacun des photographes, appelle photographerFactory, puis getUserCardDOM
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
