import express from "express";

const app = express();

app.get("/api/todos", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Todos 1",
      due: "2016-02-11T09:46:56.023Z",
      tasks: [
        { id: 1, name: "Do the laundry", done: true },
        { id: 2, name: "Do the dishes", done: false },
        { id: 3, name: "Do the backyard", done: false },
        { id: 4, name: "Do nothing", done: false },
      ],
    },
  ]);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Available at http://localhost:${port}`);
});
