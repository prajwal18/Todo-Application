import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const CreateTodo = () => {
    const { onCreateTodo } = useContext(DataContext);
    const [todoValue, setTodoValue] = useState("");
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(todoValue !== "") onCreateTodo(todoValue);
        setTodoValue("");
    };

    return (
        <form className="create-todo" onSubmit={onSubmitForm}>
            <div className="circle"><div></div></div>
            <input name="create-todo" type="text" 
                placeholder="Create a new todo..." 
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
            />
        </form>
    );
}

export default CreateTodo;