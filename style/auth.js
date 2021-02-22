const register=()=>{
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let user = sessionStorage.setItem("username",username)
    let pass = sessionStorage.setItem("password",password)

}

const login = ()=>{
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let user = sessionStorage.getItem("username",username)
    let pass = sessionStorage.getItem("password",password)

    if(username === user && password === pass){
        alert("Login Berhasil !!!")
    }else{
        alert("Login Gagal !!!")
    }
}