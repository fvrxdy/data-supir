function login(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the email and password from the form
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login validation (replace this with your actual validation logic)
    if (email === "ferdi" && password === "ferdi240504") {
        // Redirect to the admin dashboard if login is successful
        window.location.href = "data.html";
    } else {
        // Display an error message (you can customize this)
        alert("Invalid email or password. Please try again.");
    }
}
