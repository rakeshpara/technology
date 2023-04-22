var email="dummy@gmail.com"
var pass="1234"
var form=document.forms
function loginpage(){
    var userdef_email=document.getElementById("email").value
    var userdef_pass=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderDiv")
    if(email!=userdef_email && pass!=userdef_pass){
        document.body.style.backgroundImage="linear-gradient(55deg,white,red,red,red,white)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
       document.getElementById("result").innerHTML="Invalid Email id and Password"
    }
    else if(email==userdef_email && pass!=userdef_pass){
        document.body.style.backgroundImage="linear-gradient(75deg,hotpink,rgb(215, 44, 187),red)"
        divbor[0].style.borderColor="royalblue"
        divbor[1].style.borderColor="red"
       document.getElementById("result").innerHTML="Invalid Password"
    }
    else if(email!=userdef_email && pass==userdef_pass){
        document.body.style.backgroundImage="linear-gradient(75deg,red,rgb(215, 44, 187),purple"
        divbor[1].style.borderColor="royalblue"
        divbor[0].style.borderColor="red"
       document.getElementById("result").innerHTML="Invalid Email id"
    }
    else{
        form[0].action="./html/home_page.html"
        form[0].elements[2].type="submit"
    }
}
function visible(){
    form[0].elements[1].type="text";
    document.getElementById("passvisible").src="asset/image/closeyes.png"
}
function invisible(){
    form[0].elements[1].type="password";
    document.getElementById("passvisible").src="asset/image/eyeopen.png"
}
