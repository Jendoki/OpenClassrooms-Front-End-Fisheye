function mediaFactory (media, medias) {
  const { likes, photographerId, title, image, video } = media

  function getMediaDOM () {
    media.status = 'not-liked'
    const photographMedia = document.querySelector('.photograph-media')
    const linkToLightbox = document.createElement('a')
    const mediaDiv = document.createElement('div')
    const desc = document.createElement('div')
    const mediaTitle = document.createElement('p')
    const mediaLikesDiv = document.createElement('div')
    const mediaLikes = document.createElement('p')
    const buttonLikedMedia = document.createElement('button')
    const buttonUnlikedMedia = document.createElement('button')
    const likedMedia = document.createElement('img')
    const unlikedMedia = document.createElement('img')
    const likedMediaSpan = document.createElement('span')
    const unlikedMediaSpan = document.createElement('span')
    mediaLikesDiv.className = 'media-likes'
    mediaLikes.className = 'media-like'
    linkToLightbox.className = 'link-to-lightbox'
    linkToLightbox.setAttribute('href', '#')
    linkToLightbox.setAttribute('title', title)
    likedMedia.id = 'like-active'
    unlikedMedia.id = 'like-inactive'
    likedMedia.setAttribute('aria-hidden', 'true')
    unlikedMedia.setAttribute('aria-hidden', 'true')
    mediaTitle.textContent = title
    mediaLikes.textContent = likes
    likedMediaSpan.textContent = 'bouton pour unlike le media'
    unlikedMediaSpan.textContent = 'bouton pour like le media'
    likedMedia.setAttribute('src', '/assets/icons/heart-filled.svg')
    likedMedia.setAttribute('alt', `icone pour unlike la photo ${title}`)
    unlikedMedia.setAttribute('src', '/assets/icons/heart-empty.svg')
    unlikedMedia.setAttribute('alt', `icone pour like la photo ${title}`)
    buttonLikedMedia.appendChild(likedMediaSpan)
    buttonUnlikedMedia.appendChild(unlikedMediaSpan)

    linkToLightbox.addEventListener('click', () => openLightbox(media, medias))
    mediaLikesDiv.addEventListener('click', () => handleLike(media, mediaLikes, likedMedia, unlikedMedia))

    if (image === undefined) {
      getVideoDOM(
        video,
        photographMedia,
        mediaDiv,
        linkToLightbox,
        desc,
        mediaLikesDiv,
        mediaTitle,
        mediaLikes,
        buttonLikedMedia,
        buttonUnlikedMedia,
        likedMedia,
        unlikedMedia
      )
    } else {
      getImageDOM(
        image,
        photographMedia,
        mediaDiv,
        linkToLightbox,
        desc,
        mediaLikesDiv,
        mediaTitle,
        mediaLikes,
        buttonLikedMedia,
        buttonUnlikedMedia,
        likedMedia,
        unlikedMedia
      )
    }

    return mediaDiv
  }

  function getImageDOM (
    image,
    photographMedia,
    mediaDiv,
    linkToLightbox,
    desc,
    mediaLikesDiv,
    mediaTitle,
    mediaLikes,
    buttonLikedMedia,
    buttonUnlikedMedia,
    likedMedia,
    unlikedMedia
  ) {
    const img = document.createElement('img')
    img.setAttribute(
      'src',
      `/assets/photographers/Sample Photos/${photographerId}/${image}`
    )
    img.setAttribute('alt', `Photo ${title}`)
    photographMedia.appendChild(mediaDiv)
    mediaDiv.appendChild(linkToLightbox)
    linkToLightbox.appendChild(img)
    mediaDiv.appendChild(desc)
    desc.appendChild(mediaTitle)
    desc.appendChild(mediaLikesDiv)
    mediaLikesDiv.appendChild(mediaLikes)
    mediaLikesDiv.appendChild(buttonLikedMedia)
    mediaLikesDiv.appendChild(buttonUnlikedMedia)
    buttonUnlikedMedia.appendChild(unlikedMedia)
    buttonLikedMedia.appendChild(likedMedia)
    likedMedia.style.display = 'none'
  }

  function getVideoDOM (
    video,
    photographMedia,
    mediaDiv,
    linkToLightbox,
    desc,
    mediaLikesDiv,
    mediaTitle,
    mediaLikes,
    buttonLikedMedia,
    buttonUnlikedMedia,
    likedMedia,
    unlikedMedia
  ) {
    const vid = document.createElement('video')
    const vidSource = document.createElement('source')
    vid.setAttribute('width', '400px')
    vid.setAttribute('controls', 'controls')
    vidSource.setAttribute(
      'src',
      `/assets/photographers/Sample Photos/${photographerId}/${video}`
    )
    vidSource.setAttribute('type', 'video/mp4')
    vid.appendChild(vidSource)
    mediaDiv.appendChild(linkToLightbox)
    linkToLightbox.appendChild(vid)
    mediaDiv.appendChild(desc)
    desc.appendChild(mediaTitle)
    desc.appendChild(mediaLikesDiv)
    mediaLikesDiv.appendChild(mediaLikes)
    mediaLikesDiv.appendChild(unlikedMedia)
    mediaLikesDiv.appendChild(likedMedia)
    likedMedia.style.display = 'none'
  }

  function getMediaLightbox () {
    const mediaDiv = document.createElement('div')
    const desc = document.createElement('div')
    const mediaTitle = document.createElement('p')
    mediaTitle.textContent = title
    mediaDiv.style.display = 'none'

    if (image === undefined) {
      getVideoLightbox(video, mediaDiv, desc, mediaTitle)
    } else {
      getImageLightbox(image, mediaDiv, desc, mediaTitle)
    }

    return mediaDiv
  }

  function getImageLightbox (image, mediaDiv, desc, mediaTitle) {
    const img = document.createElement('img')
    img.setAttribute(
      'src',
      `/assets/photographers/Sample Photos/${photographerId}/${image}`
    )
    img.setAttribute('alt', `Photo ${title}`)
    mediaDiv.appendChild(img)
    mediaDiv.appendChild(desc)
    desc.appendChild(mediaTitle)
  }

  function getVideoLightbox (video, mediaDiv, desc, mediaTitle) {
    const vid = document.createElement('video')
    const vidSource = document.createElement('source')
    vid.setAttribute('width', '400px')
    vid.setAttribute('controls', 'controls')
    vidSource.setAttribute(
      'src',
      `/assets/photographers/Sample Photos/${photographerId}/${video}`
    )
    vidSource.setAttribute('type', 'video/mp4')
    vid.appendChild(vidSource)
    mediaDiv.appendChild(vid)
    mediaDiv.appendChild(desc)
    mediaDiv.appendChild(desc)
    desc.appendChild(mediaTitle)
  }

  return { getMediaDOM, getMediaLightbox }
}
