import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import TodoInfo from "./components/TodoInfo";
import { DataProvider } from "./context/DataContext";
import { useState } from "react";

/*Images*/
import sunLG from "./images/icon-sun.svg";
import moonLG from "./images/icon-moon.svg";


function App() {
  const [isDark, setIsDark] = useState(true);


  return (
    <div className={`App ${isDark? 'darkBg': 'lightBg'}`}>
      <div className="for-background"></div>

      <div className="todo-container">
        <div className="logo-n-button">
          <h1>Todo</h1>
          <button className="btn-light-dark"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark? <img src={sunLG} alt="Sun" />: <img src={moonLG} alt="Moon" />}
          </button>
        </div>

        <DataProvider>
          <CreateTodo />
          <TodoList />
          <TodoInfo />
        </DataProvider>

        <div className="info">
          <p>
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
