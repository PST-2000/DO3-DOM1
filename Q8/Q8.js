// Sample user data
const users = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" }
  ];
  
  // Function to create and display a user card
  function createUserCard(user) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
      `;
      return card;
  }
  
  // Function to display all user cards
  function displayUserCards() {
      const container = document.getElementById('user-cards-container');
      container.innerHTML = ''; // Clear the container
      users.forEach(user => {
          container.appendChild(createUserCard(user));
      });
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
  
      // Create a new user object
      const newUser = {
          id: users.length + 1,
          name: name,
          username: username,
          email: email
      };
  
      // Add the new user to the array and display the updated list
      users.push(newUser);
      displayUserCards();
  
      // Clear the form
      document.getElementById('user-form').reset();
  }
  
  // Initialize the page by displaying existing user cards
  displayUserCards();
  
  // Attach event listener to the form
  document.getElementById('user-form').addEventListener('submit', handleFormSubmit);
  