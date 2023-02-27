function displayModal () {
  console.log('displayModal')
  const modal = document.getElementById('contact_modal')
  const closeButton = document.getElementById('closeContactModal')
  modal.style.display = 'block'
  setTimeout(() => { closeButton.focus() }, 1)
  document.addEventListener('keydown', pressKey)
}

function pressKey (event) {
  if (event.code === 'Escape') {
    closeModal()
  }
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  document.removeEventListener('keydown', pressKey)
}

const form = document.getElementsByName('contact')
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const message = document.getElementById('message')

function validate (event) {
  event.preventDefault()
  console.log({
    'first name': firstName.value,
    'last name': lastName.value,
    email: email.value,
    message: message.value
  })
}
