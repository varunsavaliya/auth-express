const apiUrl = "http://localhost:5000/";

// Function to fetch user data from the server
const fetchUserData = async () => {
    try {
      const response = await fetch(apiUrl); // Replace with your API endpoint
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw new Error('Failed to fetch user data');
    }
  };
  
  // Function to update the profile page with user data
  const updateProfilePage = (userData) => {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const bio = document.getElementById('bio');
  
    username.innerText = `@${userData.username}`;
    email.innerText = userData.email;
    bio.innerText = `Bio: ${userData.bio}`;
  };
  
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const userData = await fetchUserData();
      updateProfilePage(userData);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  });
  