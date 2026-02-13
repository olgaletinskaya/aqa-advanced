function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json());
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json());
}

const allPromise = Promise.all([getTodo(), getUser()]);
const racePromise = Promise.race([getTodo(), getUser()]);

allPromise
  .then(result => console.log("Promise.all:", result))
  .catch(err => console.log(err));

racePromise
  .then(result => console.log("Promise.race:", result))
  .catch(err => console.log(err));
