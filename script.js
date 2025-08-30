//your JS code here. If required.
// Select the form
const form = document.getElementById("voteForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  // Validation for empty inputs
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to number
  const ageNum = Number(age);

  // Create a promise
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNum >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise resolution and rejection
  votePromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});
