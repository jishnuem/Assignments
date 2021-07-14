function createaccount(){
    let acc_no=acno.value;
    let name=acname.value;
    let balance=acbalance.value;
    let password=acpwd.value;
    let email=acmail.value;

    var account={
        acc_no,name,balance,password,email
    }
        localStorage.setItem(acc_no,JSON.stringify(account))
        alert("Account created successfully")
        window.location.href="./login.html"
}

function account(){
    let username=uname.value;
    let passwordd=password.value;
    var accounts={username,passwordd}
    console.log(accounts);
    let user_name=JSON.parse(localStorage.getItem(username))
    console.log(user_name);

    if(username in localStorage){
        if(user_name.password==passwordd){
            alert("Login Successful")
            sessionStorage.setItem("user",username)
            window.location.href="./home.html"
        }
        else{
            alert("Invalid password")
        }

    }
    else{
        alert("Invalid username")
    }

}

 var req
req=sessionStorage.getItem("user")
litem.innerHTML=`${req} Logout`

function logout(){
    sessionStorage.removeItem("user")
    window.location.href="./login.html"
}

function abalance(){
   let user=sessionStorage.getItem("user")
   let account=JSON.parse(localStorage.getItem(user))
   alert(account.balance)
}