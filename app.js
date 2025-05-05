function signUp(){
    var firstName = document.getElementById("firstName")
    var secondName = document.getElementById("secondName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    
    userObject = {
        firstName: firstName.value,
        secondName: secondName.value,
        email: email.value,
        password: password.value, 
    }
    // Get Value
    var user = localStorage.getItem("user");
    console.log("user", user)
    
    if(user == null){
        var arr = [userObject]
        console.log("arr",arr)
        localStorage.setItem("user", JSON.stringify(arr))
    }
    else{
        var userArr = JSON.parse(user)
        console.log(userArr)

        for(var i = 0; i < userArr.length; i++){
            if(userObject.email == userArr[i].email){
                alert("User Already Exist")
                return
            }
        }
        userArr.push(userObject)
        localStorage.setItem("user", JSON.stringify(userArr))
    }


}