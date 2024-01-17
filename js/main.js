//global variables
var nameUser = document.getElementById("name");
emailUser = document.getElementById('email'),
    passUser = document.getElementById('pass'),
    err = document.getElementById('error'),
    note = document.getElementById('note'),
    success = document.getElementById('success'),
    userList = [];
//set array vlaue
if (!(localStorage.getItem('user') === null)) {
    userList = JSON.parse(localStorage.getItem('user'))
}
//sign up functions
function exist() {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].userEmail.toLowerCase() === emailUser.value.toLowerCase()) {
            return false
        }
    }
}
function create() {
    if (nameUser.value === '' || emailUser.value === '' || passUser.value === '') {
        err.classList.remove('d-none')
        success.classList.add('d-none')
        note.classList.add('d-none')
        return false
    } else {
        var user = {
            userName: nameUser.value,
            userEmail: emailUser.value,
            userPass: passUser.value
        };
        if (userList.length == 0) {
            userList.push(user);
            localStorage.setItem('user', JSON.stringify(userList))
            success.classList.remove('d-none')
            note.classList.add('d-none')
            err.classList.add('d-none')
            return true
        }
        
    }
    if (exist() == false) {
        note.classList.remove('d-none')
        success.classList.add('d-none')
        err.classList.add('d-none')
    } else {
        userList.push(user);
        localStorage.setItem('user', JSON.stringify(userList))
        success.classList.remove('d-none')
        err.classList.add('d-none')
        note.classList.add('d-none')
    }
}
//login functions
function existEmail() {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].userEmail.toLowerCase() === emailUser.value.toLowerCase() && userList[i].userPass.toLowerCase() === passUser.value.toLowerCase()) {
            localStorage.setItem('loginName', userList[i].userName)
            return true
        }
    }
}
function login() {
    if (emailUser.value === '' || passUser.value === '') {
        err.classList.remove('d-none')
        note.classList.add('d-none')
    }
    else {
        if (existEmail() == true) {
            location.replace('file:///D:/route%20diploma%2010-2023/js%20course/projects/assignment-4%20(login)/pages/Home.html')
        } else {
            err.classList.add('d-none')
            note.classList.remove('d-none')

        }
    }
}
//logout fns
function logOut() {
    location.replace('file:///D:/route%20diploma%2010-2023/js%20course/projects/assignment-4%20(login)/index.html')

}
//set home user name
for (var i = 0; i < userList.length; i++) {
    if (localStorage.getItem('loginName').toLowerCase() === userList[i].userName.toLowerCase()) {
        document.getElementById('hello').innerHTML = `Welcome ${localStorage.getItem('loginName')}`
    }
}













































