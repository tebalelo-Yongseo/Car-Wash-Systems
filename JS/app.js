const customerForm = document.querySelector("#customer-form");


const customerName = document.querySelector("#customer-name");
const customerPhone = document.querySelector("#customer-phone");
const customerEmail = document.querySelector("#customer-email");

const customerMessage = document.querySelector("#customer-message");


customerForm.addEventListener("submit", function(event){

    event.preventDefault();

   
if(customerName.value.trim() === ""){
   
    customerMessage.textContent = "Please enter customer's name";
    return;
}

    
if(customerPhone.value.trim() === ""  || customerEmail.value.trim() === ""){
   
    customerMessage.textContent = "Please enter customer's phone and email";
    return;
}


    customerMessage.textContent =
        "customer added:  " + customerName.value;


});




console.log(customerForm);