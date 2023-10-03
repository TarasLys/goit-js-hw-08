import throttle from 'lodash.throttle';

const formReg = document.querySelector('.feedback-form')

const STORAGE_KEY = "feedback-form-state";

let formData = {};

function onInputHandler(event) { 
    const inputValue = event.target.value.trim();
    const inputName = event.target.name;
    formData[inputName] = inputValue;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

formReg.addEventListener("input", throttle(onInputHandler, 500));
formReg.addEventListener("submit", (event) => {
    event.preventDefault();
   
    console.log(formData);
    formData = {};
    localStorage.getItem(STORAGE_KEY);
    event.target.reset();
});

function refreshForm() { 
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (!savedData) return;
        formData = JSON.parse(savedData);
        Object.entries(formData).forEach(([key, val]) => {
            formReg.elements[key].value = val;
        });
    } catch ({ message }) { 
        console.log(message);
    }
}

refreshForm();






















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

