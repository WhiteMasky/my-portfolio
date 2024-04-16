const form = document.getElementById('feedback-form');
const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

let currentQuestionIndex = 0;

const questions = [
  {
    label: 'Name',
    inputId: 'name',
    inputName: 'name',
    type: 'text'
  },
  {
    label: 'Email address',
    inputId: 'email',
    inputName: 'email',
    type: 'text'
  },
  {
    label: 'What do you think of the appearance of this website?',
    inputId: 'feedback',
    inputName: 'feedback',
    type: 'textarea'
  },
  {
    label: 'What do you think of the content of this website?',
    inputId: 'feedback',
    inputName: 'feedback',
    type: 'textarea'
  },
  {
    label: 'What is your favourite part on this website?',
    inputId: 'favourite-part',
    inputName: 'favourite-part',
    type: 'textarea'
  },
  {
    label: 'Regarding this website, which part do you think has the biggest problems?',
    inputId: 'problems',
    inputName: 'problems',
    type: 'textarea'
  }
];


function showCurrentQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.type === 'text' || currentQuestion.type === 'textarea') {
    questionContainer.innerHTML = `
  <label for="${currentQuestion.inputId}">${currentQuestion.label}</label><br>
  ${currentQuestion.type === 'text' ? `
    <input type="${currentQuestion.type}" id="${currentQuestion.inputId}" name="${currentQuestion.inputName}">
  ` : `
    <textarea id="${currentQuestion.inputId}" name="${currentQuestion.inputName}" rows="4" cols="50"></textarea>
  `}
`;
  } else {
    // If the current question type is not text or textarea, do nothing (remove radio type questions)
    // You can also add an else if condition to handle other types of questions if needed
    questionContainer.innerHTML = ''; // Clear the question container
  }
}


nextBtn.addEventListener('click', () => {
  // Define inputField variable inside the event handler
  const inputField = document.getElementById(questions[currentQuestionIndex].inputId);
  // Get the input value
  let inputValue = inputField.value.trim();

  // Check if the input is empty
  if (inputValue === '') {
    alert('Please enter your feedback before proceeding to the next question.');
    return; // Exit the function if the input is empty
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showCurrentQuestion();
  } else {
    questionContainer.innerHTML = `
  <h2>Thank you for your feedback!</h2>
`;
    // Hide the "Next" button
    nextBtn.style.display = 'none';
    // Show the submit button
    submitBtn.style.display = 'inline';
  }
});

// Register the form submit event handler when the "Next" button is clicked for the first time
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Add email sending logic here
  console.log('Form submitted!');
});

// Initialize by showing the first question
showCurrentQuestion();


form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(form);

  // Build the email body
  let body = '';
  for (const [key, value] of formData.entries()) {
    body += `${key}: ${value}\n`;
  }

  // Build the email link
  const mailtoLink = `mailto:u7748799@anu.edu.au?subject=Feedback Form&body=${encodeURIComponent(body)}`;

  // Open the email client
  window.open(mailtoLink, '_blank');
});
