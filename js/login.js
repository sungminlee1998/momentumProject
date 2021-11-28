const login = document.querySelector('.login');
const loginInput = document.getElementById('loginInput');
const loginSubmit = document.getElementById('loginSubmit');
const loginForm = document.getElementById('loginForm');

let name = ""

function handleLogin(e){
    e.preventDefault()
    name = loginInput.value 
    loginForm.remove();
    //remove input upon input
    const helloUser = document.createElement('h1')
    helloUser.innerHTML = `Hello ${name}`
    login.append(helloUser)
    //say hello user upon input
    localStorage.setItem('username', name)
    //add name to local storage
}
function nameFromLs(){
    let nameLs = localStorage.getItem('username')
    if (nameLs){
        loginForm.remove();
    }
    if (nameLs !== null){
    const helloUser = document.createElement('h1')
    helloUser.innerHTML = `Hello ${nameLs}`
    login.append(helloUser)
    }
}

loginSubmit.addEventListener('click', handleLogin)
window.addEventListener('load', nameFromLs)