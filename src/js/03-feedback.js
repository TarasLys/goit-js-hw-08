






















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

