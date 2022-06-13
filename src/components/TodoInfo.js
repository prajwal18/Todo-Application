import { useContext } from "react";
import DataContext from "../context/DataContext";
import TodoFilter from "./TodoFilter";

const TodoInfo = () => {
    const { todoLeft, onClearCompleted } = useContext(DataContext);

    return (
        <div className="todo-info">
            <p className="item-left">
                {`${todoLeft} item left`}
            </p>

            <TodoFilter />
            
            <button className="btn clear-completed"
                onClick={onClearCompleted}
            >
                Clear Completed
            </button>
        </div>
    );
}

export default TodoInfo;