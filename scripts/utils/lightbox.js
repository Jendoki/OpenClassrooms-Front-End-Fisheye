function openLightbox(media, medias) {
    const lightboxModel = lightboxFactory(media, medias)
    const lightbox = lightboxModel.getLightboxDOM()
    const modal = document.getElementById('lightbox_modal')
    modal.appendChild(lightbox)
  }