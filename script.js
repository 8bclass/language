const username = document.querySelector('.username')
const password = document.querySelector('.password')
const form = document.querySelector('.form')
const info = document.querySelector('.info')
const remember = document.querySelector('.remember')

if(localStorage.getItem('login') == 'logged'){
    form.style.display = 'none'
    info.style.display = 'inherit'
}

function login(){
    if(remember.checked === true && username.value == 'esho' && password.value == 'yakar'){
        localStorage.setItem("login", "logged")
        form.style.display = 'none'
        info.style.display = 'inherit'
    }else if(username.value == ''){
        alert('Please fill the inputs')
    }else if(password.value == ''){
        alert('Please fill the inputs')
    }
    else if(username.value == 'esho' && password.value == 'yakar'){
        form.style.display = 'none'
        info.style.display = 'inherit'
    }else{
        alert('Username or Password is inccorect')
    }
}

