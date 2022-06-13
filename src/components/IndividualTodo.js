/* Images */
import checkLG from "../images/icon-check.svg";
import crossLG from "../images/icon-cross.svg";

const IndividualTodo = ({todoInfo, onTodoStatusChange, onRemoveTodo}) => {
    return (
        <>
            <button className="btn-status"
                onClick={() =>  onTodoStatusChange(todoInfo.id)}
            >
                {
                    todoInfo.completed? 
                    <div className="circle img">
                        <img src={checkLG} alt="check" />
                    </div>
                    :<div className="circle"><div/></div>
                }
            </button>
            <p>{todoInfo.task}</p>
            <button
                onClick={() => onRemoveTodo(todoInfo.id)}
                className="btn-remove"
            >
                <img className="remove" src={crossLG} alt="cross" />
            </button>
        </>
    );
}

export default IndividualTodo;