function validateEmail(email) {
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    return ( typeof(email) !="string" || regex.test(email)) ? true :false
}

function validPassword(password) {
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    return regex.test(password);
}

function isValidMobile(phone){
    let regex = /^[6-9][0-9]{9}$/
    return regex.test(phone)
}

function isValidname(Name){
    let result = (typeof(Name) == "string" && /^[a-zA-Z]+$/.test(Name.trim()))?true:false
   
    return result
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return re.test(email);
}

module.exports = {validateEmail, validPassword,isValidMobile, isValidname,validateEmail}