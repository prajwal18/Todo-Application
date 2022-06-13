import { useContext } from "react";
import DataContext from "../context/DataContext";

const TodoFilter = () => {
  const {filter, setFilter} = useContext(DataContext);
    return (
        <div className="todo-filter-btn">
          <button 
            className={`btn btn-all ${filter === 'all' ? 'active': ''}`} 
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button 
            className={`btn btn-active ${filter === 'active' ? 'active': ''}`} 
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button 
            className={`btn btn-completed ${filter === 'completed' ? 'active': ''}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
    );
}

export default TodoFilter;