// const api = "https://6197616eaf46280017e7e589.mockapi.io/users/";
// const btnCreate = document.querySelector(".btn-create");

// function start() {
//     getuserAPI((users) => {
//         renderUser(users);
//     });
//     handleCreateUser();
// }

// function getuserAPI(callback) {
//     fetch(api)
//         .then((res) => {
//             return res.json();
//         })
//         .then(callback);
// }

// function renderUser(users) {
//     const listuser = document.querySelector(".list-user");
//     const htmls = users.map((user) => {
//         return `
//             <li class='user-${user.id}'>${user.username}
//             <button onclick='handleDeleteUser(${user.id})'>Xóa</button>
//             </li>

//         `;
//     });
//     listuser.innerHTML = htmls.join(" ");
// }

// function createUser(data, callback) {
//     let options = {
//         method: "POST",
//         headers: {
//             // "Content-Type": "application/json",
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: JSON.stringify(data),
//     };

//     fetch(api, options)
//         .then((res) => {
//             return res.json();
//         })
//         .then(callback);
// }

// function handleDeleteUser(id) {
//     let options = {
//         method: "DELETE",
//         headers: {
//             // "Content-Type": "application/json",
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     };

//     fetch(api + "/" + id, options)
//         .then((res) => {
//             return res.json();
//         })
//         .then(() => {
//             const userID = document.querySelector(".user-" + id);
//             if (userID) {
//                 userID.remove();
//             }
//         });
// }

// function handleCreateUser() {
//     btnCreate.addEventListener("click", function() {
//         const inputUsername = document.querySelector("#username").value;
//         createUser(inputUsername, function() {
//             getuserAPI((users) => {
//                 renderUser(users);
//             });
//         });
//     });
// }

// start();
