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
        alert("Signup SuccessFully!")
        window.location.href = "./index.html"
        

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
        alert("Signup SuccessFully!")
        window.location.href = "./index.html"

    }

}


function logIn(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    
    var getValue = JSON.parse(localStorage.getItem("user"))
    console.log(getValue)
    
    for (value of getValue){

        console.log("Loop Start",value.email)
        console.log("Loop Start",value.password)
        
        if(email.value === value.email && password.value === value.password){
            alert("success Full Login")

            var userLogin = {
                name: "hadi",
                email: "hadim8455@gmail.com"
            }

            localStorage.setItem("userLogin",JSON.stringify(userLogin))
            window.location.href = "./todo.html";
    alert("Email & Password Invalid")
}
    }
}

