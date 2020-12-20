function varification() {
    var telephone = document.getElementById("telep").value;
    var password = document.getElementById("pass");

    var regx = /^[6-9][0-9]{9}$/

    if (regx.test(telephone) == false) {
        alert("Invalid number");
        telep.style.border = "solid 1px red"
        return false;
    }
    else if (password.value.trim() == "") {
        alert("Enter Password");
        pass.style.border = "solid 1px red"
        return false;
    }

    else if (password.value.trim().length < 8) {
        alert("Password too short");
        pass.style.border = "solid 1px red"
        return false;
    }


    else {
        return true;
    }
}

function showpass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }

}
