setInterval(() => {
   document.getElementById("timeMs").textContent = Date.now(); 
}, 1000);


document.getElementById("ContactForm").addEventListener("submit", function(event){
    event.preventDefault();
    let valid = true
    //   name validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = document.getElementById("message").value;
    const subject = document.getElementById("subject").value; 
    let toast = document.getElementById("toast");
    if(name === ""){    
       document.getElementById("nameError").textContent = "Full Name is required"
       valid = false;
    }else if  (name.length < 3 ){
        document.getElementById("nameError").textContent = "Name must be at least 3 characters";
        valid = false;
    }else{
        document.getElementById("nameError").textContent = ""
    }
    // email validation

    if(email === ""){
        document.getElementById("emailError").textContent = "Email field is required"
        valid = false;
    }
    else if (!emailPattern.test(email)){
        document.getElementById('emailError').textContent = 'Enter  a valid email address'
        valid = false
    }else{
        document.getElementById("emailError").textContent = "";
    }
    //  Subject validation
     if (subject === ""){
        document.getElementById("subjectError").textContent = "Subject field is required"
        valid = false;
     }else{
        document.getElementById("subjectError").textContent = "";
     }
    //  message validation
     if( message === ""){
        document.getElementById("messageError").textContent = "Message field is required"
        valid = false;
     }
     else if (message.length < 10){
        document.getElementById("messageError").textContent = 'Message Must be at least be 10 characters'
        valid = false
    }else{
        document.getElementById("messageError").textContent = ''
    }

     if(!valid){
        event.preventDefault();
    }
    else{
        showToast();
    document.getElementById("ContactForm").reset(); 
    }


})


    
//     function showToast(){
//    toast.classList.add("show");
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
