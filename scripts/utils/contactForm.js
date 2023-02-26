function displayModal () {
  console.log('displayModal')
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  modal.focus()
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
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
