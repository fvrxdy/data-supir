function login(event) {
    event.preventDefault(); 

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login validation (replace this with your actual validation logic)
    if (email === "ferdi" && password === "ferdi240504") {
        window.location.href = "data.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
