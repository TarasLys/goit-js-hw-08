import throttle from 'lodash.throttle';

const formReg = document.querySelector('.feedback-form')


    const savedFeedbackFormState = localStorage.getItem("feedback-form-state");

    if (savedFeedbackFormState) {
        const { email, message } = JSON.parse(savedFeedbackFormState);
        formReg.elements.email.value = email;
        formReg.elements.message.value = message;
    }


  formReg.addEventListener('submit', throttle((event) => {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const messageInput = event.currentTarget.elements.message;

    if (!emailInput.value || !messageInput.value) {
    
        alert("всі поля повинні бути заповнені!!!");
        return;
    }
    
const formData = {
    email: emailInput.value,
    message: messageInput.value
};
      
      
     localStorage.setItem("feedback-form-state", JSON.stringify(formData));

  console.log(formData);

  formReg.reset();
    
      
}, 500));






















// const form = document.querySelector('.feedback-form');
// const inputEmail = form.elements.email;
// const inputMessage = form.elements.message;

// form.addEventListener('input', _.throttle(saveToLocalStorage, 500));
// form.addEventListener('submit', handleSubmit);

// populateFormFields();

// function saveToLocalStorage() {
//   const feedbackFormState = {
//     email: inputEmail.value,
//     message: inputMessage.value,
//   };

//   localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
// }

// function populateFormFields() {
//   const savedFeedbackFormState = localStorage.getItem('feedback-form-state');

//   if (savedFeedbackFormState) {
//     const { email, message } = JSON.parse(savedFeedbackFormState);
//     inputEmail.value = email;
//     inputMessage.value = message;
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault();

//   console.log({
//     email: inputEmail.value,
//     message: inputMessage.value,
//   });

//   form.reset();
//   localStorage.removeItem('feedback-form-state');
// }

