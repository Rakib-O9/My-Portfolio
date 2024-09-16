const mail = document.getElementById('mail').addEventListener('click',function(){
     const mail = document.getElementById('Contact-mail')
    // mail.style.visibility = "visible"
    if(mail.style.visibility === "hidden"){
        mail.style.visibility = "visible"
    }
    else{
        mail.style.visibility = "hidden" 
    }

})
// contact-number
const Phone = document.getElementById('phone').addEventListener('click',function(){
    const Phone = document.getElementById('phone-Number')
    if(Phone.style.visibility === "hidden"){
        Phone.style.visibility = "visible"
    }
    else{
        Phone.style.visibility = "hidden"
    }

})