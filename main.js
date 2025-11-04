document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    // Prevent the page from refreshing when submitting
    event.preventDefault();

    // Remove previous errors
    clearValidation();

    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // If the name is empty
    if (!name.value.trim()) {
      showInvalid(name);
      valid = false;
    }

    // If email is not valid
    if (!validateEmail(email.value)) {
      showInvalid(email);
      valid = false;
    }

    // If the message box is empty
    if (!message.value.trim()) {
      showInvalid(message);
      valid = false;
    }

    if (valid) {
      showAlert("Message sent successfully!", "success");
      form.reset();
    } else {
      showAlert("Please fill out all fields correctly.", "danger");
    }
  });

  function validateEmail(email) {
    // RegEx for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showInvalid(element) {
    element.classList.add("is-invalid");
  }

  function clearValidation() {
    document.querySelectorAll(".is-invalid").forEach((el) => {
      el.classList.remove("is-invalid");
    });
  }

  function showAlert(message, type) {
    const alertBox = document.createElement("div");

    // Use Bootstrap's Alert feature
    alertBox.className = `alert alert-${type} position-fixed bottom-0 end-0 m-3`;

    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    // Remove alert after a few seconds
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }
});


const buttons = document.querySelectorAll("#menu-section .btn");

// Get sections
const drinksSection = document.getElementById("drinks-section");
const snacksSection = document.getElementById("snacks-section");

// Function to show category
function showCategory(category) {
  if (category === "all") {
    drinksSection.style.display = "flex";
    snacksSection.style.display = "flex";
  } else if (category === "drinks") {
    drinksSection.style.display = "flex";
    snacksSection.style.display = "none";
  } else if (category === "snacks") {
    drinksSection.style.display = "none";
    snacksSection.style.display = "flex";
  }
}

//event listeners
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.id.replace("btn-", ""); // "drinks" or "snacks"
    showCategory(category);

    //handle active button styling
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

//show all on page load
window.addEventListener("DOMContentLoaded", () => showCategory("all"));