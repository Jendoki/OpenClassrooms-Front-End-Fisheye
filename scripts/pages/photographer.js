async function getPhotographerAndMedia (id) {
  let json = []
  let photographer = []
  let media = []
  let mediaLikes = []
  let likesNumber = 0
  try {
    const response = await fetch('/data/photographers.json')
    json = await response.json()
    photographer = json.photographers.find((p) => p.id === id)
    media = json.media.filter((m) => m.photographerId === id)
    mediaLikes = media.map((m) => m.likes)
    likesNumber = mediaLikes.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    console.log(media)
    console.log(likesNumber)
  } catch (error) {
    console.error(error)
  }

  return [photographer, media, likesNumber]
}

function sortMedias (medias) {
  const sort = document.querySelector('#sort_select')
  sort.addEventListener('change', function () {
    if (this.value === 'sort_by_popularity') {
      sortMediasByPopularity(medias)
    } else if (this.value === 'sort_by_date') {
      sortMediasByDate(medias)
    } else if (this.value === 'sort_by_title') {
      sortMediasByTitle(medias)
    } else {
      console.log('sort function not found')
    }
  })
}

function sortMediasByPopularity (medias) {
  medias.sort((m1, m2) =>
    m1.likes < m2.likes ? 1 : m1.likes > m2.likes ? -1 : 0
  )
  displayMedias(medias)
}

function sortMediasByDate (medias) {
  medias.sort((m1, m2) => (m1.date < m2.date ? 1 : m1.date > m2.date ? -1 : 0))
  displayMedias(medias)
}

function sortMediasByTitle (medias) {
  medias.sort((m1, m2) =>
    m1.title > m2.title ? 1 : m1.title < m2.title ? -1 : 0
  )
  displayMedias(medias)
}

function displayMedias (medias) {
  const photographerMedia = document.querySelector('.photograph-media')
  photographerMedia.innerHTML = ''
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media, medias)
    const mediaCardDOM = mediaModel.getMediaDOM()
    photographerMedia.appendChild(mediaCardDOM)
  })
}

async function displayData (photographerData) {
  console.log(photographerData)
  const photographer = photographerData[0]
  const medias = photographerData[1]
  const likesNumber = photographerData[2]
  const price = photographerData[0].price

  const photographerHeader = document.querySelector('.photograph-header')
  const photographerModel = photographerFactory(photographer)
  const userCardDOM = photographerModel.getUserDOM()
  photographerHeader.appendChild(userCardDOM)

  displayMedias(medias)

  const photographerInsert = document.querySelector('.insert')
  const likesDiv = document.createElement('div')
  const likesNumberP = document.createElement('p')
  const pricePerDay = document.createElement('p')
  const heart = document.createElement('img')
  heart.id = 'total-likes-icon'
  likesNumberP.id = 'total-likes'
  likesNumberP.textContent = likesNumber
  pricePerDay.textContent = `${price}€ / jour`
  heart.setAttribute('src', '/assets/icons/heart-filled.svg')
  heart.setAttribute('alt', 'icone de likes')
  photographerInsert.appendChild(likesDiv)
  likesDiv.appendChild(likesNumberP)
  likesDiv.appendChild(heart)
  photographerInsert.appendChild(pricePerDay)
  sortMedias(medias)
}

async function init () {
  const params = new URL(document.location).searchParams
  const id = +params.get('id')
  // Récupère les datas du photographe
  const photographerData = await getPhotographerAndMedia(id)
  displayData(photographerData)
}

init()
