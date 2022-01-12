const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };
 
  let isFormValid = false;
  let isValidationOn= false; // to prevent validation before the submit button is pressed

  const form = document.querySelector('form'); // for even listener, when someone is trying to submit the form
  const nameInput = document.querySelector('input[name="first_name"]');
  const lastNameInput = document.querySelector('input[name="last_name"]');
  const email = document.querySelector('input[name="email"]');
  const phoneNum = document.querySelector('input[name="phone"]');
  const messageInput=document.querySelector('textarea[name="message')

  const button = document.querySelector('button');

 
  

  const allInputs = [
    nameInput,
    lastNameInput,
    email,
    phoneNum
  ];

  const Oops = document.querySelector('.Oops');
  
  const resetInput = (e)=>{
    e.classList.remove("Invalid");
    e.nextElementSibling.classList.add("hidden");
  }

  const invalidateInput = (e)=>{

    e.classList.add("Invalid"); // to call invalid class that change the color of borders
    e.nextElementSibling.classList.remove("hidden");
  }

  const validateInput = () => {
    if(!isValidationOn) return;

    isFormValid = false;
    resetInput(nameInput);
    resetInput(lastNameInput);
    resetInput(email);
    resetInput(phoneNum)

    if(!nameInput.value){
      invalidateInput(nameInput);
      isFormValid = true;
    }
    else if(!lastNameInput.value){
    invalidateInput(lastNameInput);
    isFormValid = true;
    }
    else if(!isValidEmail(email.value)){
      invalidateInput(email)
      isFormValid = true;
    }
    else if(!isValidPhone(phoneNum.value)){
      invalidateInput(phoneNum)
      isFormValid = true;
    }

  }

  form.addEventListener('submit', (e)=>{ // Listener that listens if the form is submited by pressing enter or the "submit" button
       isValidationOn = true;
        e.preventDefault();//stop default behavior of refreshing the page
        validateInput();
        if(!isFormValid){ //if form valid, submit it
          form.remove(); // we remove the form after submiting to display a message
          Oops.classList.remove("hidden");
          console.log("Form has been submited");

        }
  })

  allInputs.forEach(input=>{ //update for the event listeners below
    input.addEventListener("input", ()=>{
      validateInput();
    })
  })
/*
  nameInput.addEventListener('input', ()=>{
    validateInput();
  })

  lastNameInput.addEventListener('input', ()=>{
    validateInput();
  })

  email.addEventListener('input', ()=>{
    validateInput();
  })*/