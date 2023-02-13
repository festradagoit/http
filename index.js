// console.log("hello");

// api de fetch
// fetch(url, options)

const fetchBtn = document.querySelector(".fetchUsers");
const UserList = document.querySelector(".user-list");

const newUserbtn = document.querySelector(".newUserbtn");
const email = document.querySelector(".email");
const nickname = document.querySelector(".nickname");
const name = document.querySelector(".name");
const form = document.querySelector(".newUser");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("bang!");
});

fetchBtn.addEventListener("click", () => {
  console.log("clic en el boton");

  fetchUsers()
    .then((users) => showUsers(users))
    .catch((err) => console.log(err));
});

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       return response.json();
//     }
//   );
// }

function fetchUsers() {
  return fetch(`https://jsonplaceholder.typicode.com/users/${1}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function showUsers(users) {
  const markup = users
    .map((user) => {
      return `
      <div>
        ${user.name}
      </div>
      <div>${user.phone}</div>
      `;
    })
    .join("");
  UserList.innerHTML = markup;
}

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });
