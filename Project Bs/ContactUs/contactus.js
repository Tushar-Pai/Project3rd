function validate(){

var em= document.getElementById("mail").value;
var telephone=document.getElementById("phone").value;
var sub=document.getElementById("subject").value;
var nam=document.getElementById("name").value;
var feedback=document.getElementById("message").value;
var regx1= /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/
var regx2= /^[6-9][0-9]{9}$/
var flag=1;


 if(regx1.test(em)==false)
{
    document.getElementById("lbl2").innerHTML="Invalid email";
    document.getElementById("lbl2").style.visibility="visible";
    document.getElementById("lbl2").style.color="red";
   flag=0;

}


 if (regx2.test(telephone) == false) {
    document.getElementById("lbl3").innerHTML="Invalid number";
    document.getElementById("lbl3").style.visibility="visible";
    document.getElementById("lbl3").style.color="red";
    flag=0;
    
}

if(sub=="")
{
    document.getElementById("lbl4").innerHTML="Please fill this field";
    document.getElementById("lbl4").style.visibility="visible";
    document.getElementById("lbl4").style.color="red";
    flag=0;
    
}
if(nam=="")
{
    document.getElementById("lbl1").innerHTML="Please enter your name";
    document.getElementById("lbl1").style.visibility="visible";
    document.getElementById("lbl1").style.color="red";
    flag=0;
    
}

if(feedback=="")
{
    document.getElementById("lbl5").innerHTML="Please fill this field";
    document.getElementById("lbl5").style.visibility="visible";
    document.getElementById("lbl5").style.color="red";
    flag=0;
   
}


if(flag==1)
{
    alert('Your enquiry has been sent.')
    return true;
}

}