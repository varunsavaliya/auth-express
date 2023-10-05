
const apiUrl = "http://localhost:5000/api/auth/signup";


document.getElementById("signup-button").addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const userData = {
      username: username,
      email: email,
      password: password,
      name: name,
      bio: bio
    };
    signup(userData);
  });

  
const signup = async (userData) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      console.log("Signup response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };