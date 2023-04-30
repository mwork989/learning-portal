

function submit(event){
    console.log(event)
    var email = document.getElementById('inputEmail4').value;
    var password = document.getElementById('password').value;
    var designation = document.getElementById('designation').value;
    var inputAddress = document.getElementById('inputAddress').value;
    var inputAddress2 = document.getElementById('inputAddress2').value;
    
    if(email && password && designation && inputAddress && inputAddress2){
        var user= {};
        user.email = email;
        user.password = password;
        user.designation = designation;
        user.inputAddress = inputAddress;
        user.inputAddress2 = inputAddress2;
    }
    console.log(user);
   
}