function getUserLogin(){
    var profile = JSON.parse(localStorage.getItem("userLogin"))
    // console.log(profile)

    var firstName = document.getElementById("firstName")
    var secondName = document.getElementById("secondName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    
    firstName.value = profile.firstName
    secondName.value = profile.secondName
    email.value = profile.email
    password.value = profile.password

    
}
return
function updateUser(){
    var firstName = document.getElementById("firstName")
    var secondName = document.getElementById("secondName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var updateObject = {
        firstName: firstName.value,
        secondName: secondName.value,
        email: email.value,
        password: password.value,
    }
return
    var userArr = JSON.parse(localStorage.getItem("user"))
    // console.log(userArr)

    var indexNumber;

    for(var i = 0; i < userArr.length; i++){
        if(userArr[i].email === email.value){
            indexNumber = i;
            console.log("userName", indexNumber)
        }
    }
    userArr[indexNumber] = updateObject
    localStorage.setItem("user", JSON.stringify(userArr))

}
