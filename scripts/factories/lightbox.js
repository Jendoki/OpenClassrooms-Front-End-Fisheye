function lightboxFactory (media, medias) {
  function getLightboxDOM () {
    const lightbox = document.createElement('div')
    const closeButton = document.createElement('img')
    const leftButton = document.createElement('img')
    const rightButton = document.createElement('img')
    lightbox.className = 'lightbox'
    lightbox.id = 'lightbox'
    closeButton.id = 'close'
    leftButton.id = 'left'
    rightButton.id = 'right'
    lightbox.setAttribute('aria-hidden', 'true')
    lightbox.setAttribute('role', 'dialog')
    lightbox.setAttribute('aria-describedby', 'modalLightbox')
    closeButton.setAttribute('src', '/assets/icons/close.svg')

    closeButton.addEventListener('click', close)

    leftButton.setAttribute('src', '/assets/icons/left.svg')
    rightButton.setAttribute('src', '/assets/icons/right.svg')

    leftButton.addEventListener('click', previous)
    rightButton.addEventListener('click', next)
    document.addEventListener('keydown', pressKey)

    lightbox.appendChild(leftButton)
    medias.forEach((oneMedia) => {
      const factory = mediaFactory(oneMedia)
      const element = factory.getMediaLightbox()
      element.id = `${oneMedia.id}`
      element.className = 'lightbox_media'
      if (media.id === oneMedia.id) {
        element.style.display = 'block'
      }
      lightbox.appendChild(element)
    })

    lightbox.appendChild(closeButton)
    lightbox.appendChild(rightButton)
    console.log(medias)
    return lightbox
  }

  function pressKey (event) {
    if (event.code === 'ArrowLeft') {
      previous()
    } else if (event.code === 'ArrowRight') {
      next()
    } else if (event.code === 'Escape') {
      close()
    }
  }

  function close() {
    const lightbox = document.getElementById('lightbox')
    const modal = document.getElementById('lightbox_modal')
    modal.removeChild(lightbox)
    document.removeEventListener('keydown', pressKey)
  }

  // fonction qui prend en paramètre le media clické et le tableau avec tous les medias
  // retourne l'index dans le tableau
  function getMediaIndexInMedias (media, medias) {
    for (let i = 0; i < medias.length; i++) {
      if (media.id === medias[i].id) {
        return i
      }
    }

    return null
  }

  let currentIndex = getMediaIndexInMedias(media, medias)

  function next () {
    // masquer le media affiché
    const previousMediaDOM = document.getElementById(medias[currentIndex].id)
    previousMediaDOM.style.display = 'none'

    if (currentIndex === medias.length - 1) {
      currentIndex = 0
    } else {
      currentIndex += 1
    }

    // afficher le media
    const mediaDOM = document.getElementById(medias[currentIndex].id)
    mediaDOM.style.display = 'block'
  }

  function previous () {
    // masquer le media affiché
    const previousMediaDOM = document.getElementById(medias[currentIndex].id)
    previousMediaDOM.style.display = 'none'

    if (currentIndex > 0) {
      currentIndex -= 1
    } else {
      currentIndex = medias.length - 1
    }

    // afficher le media
    const mediaDOM = document.getElementById(medias[currentIndex].id)
    mediaDOM.style.display = 'block'
  }

  return { getLightboxDOM }
}
