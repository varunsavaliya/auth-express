const apiUrl = "http://localhost:5000/api/auth/login";


const login = async (userData) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log("Login response:", data);

    if (!data.success) {
      throw new Error('Login failed');
    }

    window.location.href = '/Frontend/profile.html';
  } catch (error) {
    console.error("Error:", error);
  }
};


document.getElementById("login-button").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userData = {
    email: email,
    password: password,
  };
  console.log(userData);
  login(userData);
});
