import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import CardList from "./components/CardList/CardList";
import "./styles.css";

function App() {
  const data = [
    {
      id: "123",
      message: "Can Bet",
      out: true
    },
    {
      id: "224",
      message: "Can Bet",
      out: false
    },
    {
      id: "145",
      message: "Can Bowl",
      out: false
    }
  ];
  return (
    <Provider store={store}>
      <div className="App">
        <h2>A simple todo list app to experiment with Redux Toolkit</h2>
        <TodoInput />
        <TodoList />
        <CardList data={data} />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
