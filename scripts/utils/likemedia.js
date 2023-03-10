function handleLike(media, mediaLikes, likedMedia, unlikedMedia) {
    if (media.status === 'not-liked') {
      likeMedia(media, mediaLikes, likedMedia, unlikedMedia)
    } else if (media.status === 'liked') {
      unlikeMedia(media, mediaLikes, likedMedia, unlikedMedia)
    }
  }
  
  function likeMedia (media, mediaLikes, likedMedia, unlikedMedia) {
    media.likes += 1
    media.status = 'liked'
    mediaLikes.textContent = media.likes
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
    likedMedia.style.display = 'none'
    unlikedMedia.style.display = 'block'
    const totalLikes = document.querySelector('#total-likes')
    const newTotalLikes = parseInt(totalLikes.textContent) - 1
    totalLikes.textContent = newTotalLikes
  }