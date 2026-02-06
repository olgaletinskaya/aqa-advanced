async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

async function run() {
  try {
    const all = await Promise.all([getTodo(), getUser()]);
    console.log("Async Promise.all:", all);

    const race = await Promise.race([getTodo(), getUser()]);
    console.log("Async Promise.race:", race);
  } catch (e) {
    console.log(e);
  }
}

run();
