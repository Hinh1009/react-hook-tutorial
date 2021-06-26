import React, { useState, useEffect } from "react";
import "./App.scss";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import queryString from "query-string";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";

// import ColorBox from "./components/ColorBox";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "Mission 1" },
  //   { id: 2, title: "Mission 2" },
  //   { id: 3, title: "Mission 3" },
  // ]);

  // const handleClick = (todo) => {
  //   console.log(todo);
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // };

  // const handleTodoFormSubmit = (formValues) => {
  //   console.log("Form submit", formValues);

  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };

  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // };

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to post");
      }
    }

    fetchPostList();
  }, [filters]);

  const handlePageChange = (newPage) => {
    console.log("New Page:", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  const handleFiltersChange = (newFilters) => {
    console.log("NEW FILTERS", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  };

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <h1>Welcome to App React Hooks </h1>
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide Worse Clock</button>
      <br />

      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onClick={handleClick} /> */}
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <MagicBox />
    </div>
  );
}

export default App;
