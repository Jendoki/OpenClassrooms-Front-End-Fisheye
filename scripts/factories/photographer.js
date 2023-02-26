function photographerFactory (photographer) {
  const { id, name, portrait, city, country, price, tagline } = photographer

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM () {
    const article = document.createElement('article')
    const link = document.createElement('a')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const locationP = document.createElement('p')
    const taglineP = document.createElement('p')
    const priceP = document.createElement('p')
    article.setAttribute('aria-label', `Présentation du photographe ${name}`)
    link.setAttribute('aria-label', `Lien de la page du photographe ${name}`)
    link.setAttribute('href', `/photographer.html?id=${id}`)
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'Photo du photographe')
    locationP.className = 'location'
    taglineP.className = 'tagline'
    priceP.className = 'price'
    locationP.textContent = `${city}, ${country}`
    taglineP.textContent = `${tagline}`
    priceP.textContent = `${price}€/jour`
    h2.textContent = name
    article.appendChild(link)
    link.appendChild(img)
    link.appendChild(h2)
    article.appendChild(locationP)
    article.appendChild(taglineP)
    article.appendChild(priceP)
    console.log(photographer)
    return article
  }

  // add code for the photographer page
  function getUserDOM () {
    const photographHeader = document.querySelector('.photograph-header')
    const photographerProfile = document.createElement('div')
    const column = document.createElement('div')
    const h1 = document.createElement('h1')
    const locationh3 = document.createElement('h3')
    const taglineP = document.createElement('p')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'Photo du photographe')
    photographerProfile.className = 'photographer-profile'
    column.className = 'column-1'
    locationh3.className = 'location'
    taglineP.className = 'tagline'
    h1.textContent = name
    locationh3.textContent = `${city}, ${country}`
    taglineP.textContent = `${tagline}`
    photographHeader.prepend(column)
    column.appendChild(h1)
    column.appendChild(locationh3)
    column.appendChild(taglineP)
    photographerProfile.appendChild(img)
    return photographerProfile
  }
  return { name, picture, getUserCardDOM, getUserDOM }
}
