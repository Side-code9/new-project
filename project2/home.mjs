import advantages from "./mock/advantages.mjs"
import users from "./mock/users.mjs"

console.log(users)


let usersList = document.querySelector('.user-list')

const renderUserList = (data) => {
  data.forEach(user => {
    const card = document.createElement('div')
    card.classList.add("user-card")

    let roleClass = 'role-user'
    if (user.role === 'Admin') roleClass = 'role-admin'
    if (user.role === 'Moderator') roleClass = 'role-moderator'

    card.innerHTML = `
      <img src="${user.avatar}" alt="${user.name}">
      <h2>${user.name}</h2>
      <p>${user.description}</p>
      <p class="${roleClass}>Role: ${user.role}</p>
      <button data-id="${user.id}">Delete</button>
    `
    usersList.appendChild(card)
  })
  console.log('data', data)
}

renderUserList(users)


const cancelBtn = document.querySelector('.cancel')

cancelBtn.addEventListener('click', (event) => {

    window.location.href = 'index.html'
})

const notifications = document.querySelector(".notifications")

const toastDetails = {
  timer: 5000,
  send: {
    icon: "fa-circle-check",
    text: "Пользователь добавлен",
  }
}

const removeToast = (toast) => {
  toast.classList.add("hide")
  if (toast.timeoutId) clearTimeout(toast.timeoutId)
    setTimeout(() => toast.remove(), 500)
}

const createToast = (id) => {
  const { icon, text } = toastDetails[id]
  const toast = document.createElement("li")
  toast.className = `toast ${id}`
  toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
  notifications.appendChild(toast) 
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}

window.removeToast = removeToast;


const sectionAdvantagesEl = document.querySelector('.section-advantages')

const displayAdvantageCards = (data) => {
  sectionAdvantagesEl.innerHTML = ""
  data.forEach((item) => {
    const card = document.createElement("div")
    
    card.innerHTML = `
    <div>
    <img src="${item.image}" alt="card image" width="200">
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}">Learn More</a>
      </div>
    </div>
    `

    sectionAdvantagesEl.appendChild(card)
  })
}

displayAdvantageCards(advantages)

let addBtn = document.querySelector('#btn-add-user')
let mw = document.querySelector('.modal-wrapper')
let submitBtn = document.querySelector('.submit-btn')
let inputName = document.querySelector('.input-name')
let inputDescription = document.querySelector('.input-description')
let inputAvatar = document.querySelector('.input-avatar')

function addUserForm() {
  mw.style.display = 'flex'
}

let c = 9

function addNewUser() {
  newUser = {
    id: c+=1,
    name: inputName.value,
    description: inputDescription.value,
    avatar: inputAvatar.value,
    role: "User"
  }
  users.push(newUser)
  console.log(users)
}

addBtn.addEventListener('click', addUserForm)
submitBtn.addEventListener('click', addNewUser)
