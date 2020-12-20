function varification()
{
    var telephone = document.getElementById("telep").value;
    var password = document.getElementById("pass");
    var repassword = document.getElementById("repass");
    var regx=/^[6-9][0-9]{9}$/
   
    if(password.value.trim()=="")
     {
         alert(" Password should not be empty");
         pass.style.border="solid 1px red"
         return false;
     }
     else if(regx.test(telephone)==false)
     {
         alert("Invalid number");
         telep.style.border="solid 1px red"
         return false;
     }
     else if(password.value.trim().length<8)
     {
         alert("Password too short");
         pass.style.border="solid 1px red"
         return false;
     }

    else if(password.value.trim()!= repassword.value.trim())
    {
        alert("The two passwords do not match")
        repass.style.border="solid 1px red"
        pass.style.border="solid 1px red"
        return false;
    }
      
   
    else
    {
    alert("Sign up successfully completed")
     return true;
    }
}
function showpass()
{
    var x= document.getElementById("pass");
    if(x.type==="password")
    {
        x.type="text";
    }
    else
    {
        x.type="password";
    }

    var y= document.getElementById("repass");
    if(y.type==="password")
    {
        y.type="text";
    }
    else
    {
        y.type="password";
    }
}
