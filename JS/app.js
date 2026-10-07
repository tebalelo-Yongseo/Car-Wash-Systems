
//customer form
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



//vehicle form
const vehicleForm = document.querySelector("#vehicle-form");

const vehicleCustomer = document.querySelector("#vehicle-customer");
const registrationNumber = document.querySelector("#registration-number");
const vehicleMake = document.querySelector("#vehicle-make");
const vehicleModel = document.querySelector("#vehicle-model");

const vehicleMessage = document.querySelector("#vehicle-message");


vehicleForm.addEventListener("submit", function(event){
     
    event.preventDefault();


    vehicleMessage.textContent =
          "Vehicle added: " + 
          registrationNumber.value + "-" +
          vehicleMake.value + " " +
          vehicleModel.value;

});

//service form
const serviceForm = document.querySelector("#service-form");

const serviceName = document.querySelector("#service-name");
const serviceDescription = document.querySelector("#service-description");
const servicePrice = document.querySelector("#service-price");

const serviceMessage = document.querySelector("servive-message");


serviceForm.addEventListener("subnit", function(event){
       
    event.preventDefault();


    serviceMessage.textContent = 
        "Service added: " +
        serviceName.value +
        " - R" +
        servicePrice.value;


});



console.log(customerForm);
console.log(vehicleForm);
console.log(serviceForm);