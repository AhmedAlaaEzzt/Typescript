import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data;

  const id = todo.ID;
  const title = todo.Title;
  const completed = todo.Completed;

  console.log(`
    The Todo with Id: ${id}
    Has a title of: ${title}
    Is it completed: ${completed}`);
});
