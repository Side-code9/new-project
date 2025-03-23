let signEl = document.querySelector('#sign-in');
let signUpEl = document.querySelector('#sign-up');

signEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(signEl);
    const newUser = Object.fromEntries(formData);

    console.log(newUser);

    localStorage.setItem('activeUser', JSON.stringify(newUser))

    window.location.href = 'home.html'
})

inOrUp = document.querySelector('.up-or-in')

let form = false

inOrUp.addEventListener('click', (event) => {
    form = !form;
    console.log(form)
    if (form === true) {
        signUpEl.style.display = 'flex'
        signEl.style.display = 'none'
        inOrUp.textContent = 'Sign in'
    }
    if (form === false) {
        signEl.style.display = 'flex'
        signUpEl.style.display = 'none'
        inOrUp.textContent = 'Sign Up'
    }
 })