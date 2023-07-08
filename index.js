function sendMail() {
  const form = document.getElementById('myForm');
const submitButton = document.getElementById('myBtn');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  if (areInputsFilled()) {
    // Call your function here if all inputs are filled
    yourFunction();
  } 
  else {
    alert('Please fill in all input fields.');
  }
});

function areInputsFilled() {
  const inputs = form.querySelectorAll('input');
  let allFilled = true;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
      allFilled = false;
      break;
    }
  }

  return allFilled;
}

function yourFunction() {
  // Code for your function when all inputs are filled
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    number: document.getElementById("number").value,
  };

  const serviceID = "service_odkp6jv";
  const templateID = "template_uxbofsi";


  emailjs.send(serviceID, templateID, params)
  .then(res => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("number").value = "";
    console.log(res);
    alert("Your message sent successfully!!");
  })
  .catch(err => console.log(err));
}

  
}

