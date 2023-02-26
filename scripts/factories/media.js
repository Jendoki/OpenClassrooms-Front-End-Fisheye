function mediaFactory (media, medias) {
  const { likes, photographerId, title, image, video } = media

  // TO DO :
  // Accessibilité :
  // - modal de contact - voir les aria-label et autres

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
    mediaLikesDiv.className = 'media-likes'
    linkToLightbox.className = 'link-to-lightbox'
    linkToLightbox.setAttribute('href', '#')
    likedMedia.id = 'like-active'
    unlikedMedia.id = 'like-inactive'


    linkToLightbox.addEventListener('click', function () {
      const lightboxModel = lightboxFactory(media, medias)
      const lightbox = lightboxModel.getLightboxDOM()
      const modal = document.getElementById('lightbox_modal')
      modal.appendChild(lightbox)
    })
    mediaTitle.textContent = title
    mediaLikes.textContent = likes
    likedMedia.setAttribute('src', '/assets/icons/heart-filled.svg')
    likedMedia.setAttribute('alt', `icone pour unlike la photo ${title}`)
    unlikedMedia.setAttribute('src', '/assets/icons/heart-empty.svg')
    unlikedMedia.setAttribute('alt', `icone pour like la photo ${title}`)

    mediaLikesDiv.addEventListener('click', function () {
      if (media.status === 'not-liked') {
        likeMedia(media, mediaLikes, likedMedia, unlikedMedia)
      } else if (media.status === 'liked') {
        unlikeMedia(media, mediaLikes, likedMedia, unlikedMedia)
      }
    })

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

  function likeMedia (media, mediaLikes, likedMedia, unlikedMedia) {
    media.likes += 1
    media.status = 'liked'
    mediaLikes.textContent = media.likes
    console.log(media)
    likedMedia.style.display = 'block'
    unlikedMedia.style.display = 'none'
    const totalLikes = document.querySelector('#total-likes')
    const newTotalLikes = parseInt(totalLikes.textContent) + 1
    totalLikes.textContent = newTotalLikes
  }

  function unlikeMedia (media, mediaLikes, likedMedia, unlikedMedia) {
    media.likes -= 1
    media.status = 'not-liked'
    mediaLikes.textContent = media.likes
    console.log(media)
    likedMedia.style.display = 'none'
    unlikedMedia.style.display = 'block'
    const totalLikes = document.querySelector('#total-likes')
    const newTotalLikes = parseInt(totalLikes.textContent) - 1
    totalLikes.textContent = newTotalLikes
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
