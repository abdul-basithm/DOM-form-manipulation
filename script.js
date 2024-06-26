function foo() {
    var firstname = document.getElementById("first-name");
    var lastname = document.getElementById("last-name");
    var email = document.getElementById("email");
    var addresss = document.getElementById("address");
    var pincode = document.getElementById("pincode");
    var genderm = document.getElementsByName("gender");
    var food = document.getElementsByName("food");
    var stateinp = document.getElementById("state");
    var countryinp = document.getElementById("country")

    var first = firstname.value;   
    var last =lastname.value
    var email1=email.value;
    var address = addresss.value;
    var pin = pincode.value;
    var state = stateinp.value;
    var country=countryinp.value;

    document.getElementById("firstlable").innerHTML = "First Name"
    document.getElementById("firstprint").innerHTML = first;

    document.getElementById("lastlable").innerHTML = "Last Name"
    document.getElementById("lastprint").innerHTML = last;

    document.getElementById("emaillable").innerHTML = "Email"
    document.getElementById("emailprint").innerHTML = email1;

    document.getElementById("addresslable").innerHTML = "Address"
    document.getElementById("addressprint").innerHTML = address;

    document.getElementById("pincodelable").innerHTML = "Pincode"
    document.getElementById("pincodeprint").innerHTML = pin;

    for (var i = 0; i < genderm.length; i++) {
        if (genderm[i].checked) {
            document.getElementById("genderlable").innerHTML = "Gender"
            document.getElementById("genderprint").innerHTML = genderm[i].value
        }
    }
    document.getElementById("foodlable").innerHTML = "Food Selected"
   var foodlist = [...food];
   var ele=[];
    foodlist.forEach((foodie)=>{
        if(foodie.checked){
ele.push(foodie.value)
        }
    })   
    document.getElementById("foodprint").innerHTML = ele;

    document.getElementById("statelable").innerHTML = "State"
    document.getElementById("stateprint").innerHTML = state;

    document.getElementById("countrylable").innerHTML = "Country"
    document.getElementById("countryprint").innerHTML = country;


    firstname.value="";
    lastname.value=""
    email.value="";
    addresss.value = "";
    pincode.value = "";
    stateinp.value = "";
    countryinp.value = "";
}
