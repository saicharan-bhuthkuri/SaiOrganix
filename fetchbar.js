fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("#nav").innerHTML = data;
        const usernameDisplay = document.getElementById('usernameDisplay');
        const username = localStorage.getItem("username")
        if (username) {
            usernameDisplay.textContent = username; // Set the username in the span
        }
    })
    .catch(error => console.error('Error fetching the file:', error));

