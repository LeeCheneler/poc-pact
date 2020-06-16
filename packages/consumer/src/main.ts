import fetch from "isomorphic-fetch";

interface FetchTodosOptions {
  baseUrl: string;
}

export const fetchTodos = async (options: FetchTodosOptions) => {
  const response = await fetch(`${options.baseUrl}/api/todos`, {
    headers: {
      Accept: "application/json",
      // "Accept-Encoding": "gzip,deflate",
      // "User-Agent": "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)",
      // Connection: "close",
      // Host: "localhost:1234",
      // Version: "HTTP/1.1",
    },
  });

  const todos = await response.json();

  console.log(JSON.stringify(todos, null, 2));
};
