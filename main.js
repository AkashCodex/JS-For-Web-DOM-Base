//DOM 
//slecting the things

const nameField=document.querySelector('name');
const emailField=document.querySelector('email');
const submitButton=document.querySelector('.btn');




submitButton.addEventListener('submit',onclick);
     
function onclick(e){
        if(nameField=='akash' || emailField=='akash.arora@crownstack.com'){
          alert("Suceesss");
        }
        else{
          alert("Failure");
        } 
     }
 

