class ApiService {
  getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json());
  }

  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json());
  }
}

class AsyncApiService {
  async getTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
  }

  async getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return res.json();
  }
}

const api = new ApiService();
api.getTodo().then(result => console.log("Class then:", result));

const asyncApi = new AsyncApiService();
asyncApi.getUser().then(result => console.log("Class async:", result));
