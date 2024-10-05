document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }

    // Simulate a form submission (you can add your backend logic here)
    document.getElementById("formFeedback").style.display = "block";

    // Clear form fields
    document.getElementById("contactForm").reset();
});
