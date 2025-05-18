  function getUserLogin(){
    var profile = JSON.parse(localStorage.getItem("userLogin"))
    // console.log(profile)

    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    
    firstName.value = profile.firstName
    lastName.value = profile.lastName
    email.value = profile.email
    password.value = profile.password

    
}
function updateUser(){
    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var profileObject = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    
    var userArr = JSON.parse(localStorage.getItem("user"))
    console.log("arry",userArr[1])



    var indexNumber;

    for(var i = 0; i < userArr.length; i++){
        if(userArr[i].email === email.value){
            indexNumber = i;
            console.log("userName", indexNumber)
        }
    }
    userArr[indexNumber] = profileObject
    localStorage.setItem("user", JSON.stringify(userArr))

}


// sir code

/**
function getUserLogin() {
    var profile = JSON.parse(localStorage.getItem("userLogin"))
    // console.log("getUserData", userData)

    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    firstName.value = profile.firstName
    lastName.value = profile.lastName
    email.value = profile.email
    password.value = profile.password


}


function updateUser() {
    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var profileObject = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    var userArr = JSON.parse(localStorage.getItem("user"))
    var indexNumber;
    for (var i = 0; i < userArr.length; i++) {
        if (userArr[i].email === email.value) {
            // console.log("indexNumber", i)
            indexNumber = i
        }
    }

    userArr[indexNumber] = profileObject
    console.log("userArr", userArr)
    localStorage.setItem("user", JSON.stringify(userArr))

}   **/