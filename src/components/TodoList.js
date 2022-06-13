import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DataContext from "../context/DataContext";
import IndividualTodo from "./IndividualTodo";

const TodoList = () => {
    const {newTodoList, onTodoStatusChange, onRemoveTodo, handelOnDragEnd} = useContext(DataContext);

    return (
        <>
        <DragDropContext onDragEnd={handelOnDragEnd}>
            <Droppable droppableId="todos">
                { (provided) => (
                    <div className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                newTodoList.length !== 0 ?
                                newTodoList.map((item, index) => (
                                    <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                                        {(provided) => (
                                            <div className={`todo ${item.completed ? 'completed-todo': ''}`}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <IndividualTodo
                                                    todoInfo={item}
                                                    onTodoStatusChange={onTodoStatusChange}
                                                    onRemoveTodo={onRemoveTodo}
                                                />
                                            </div>
                                            )
                                        }
                                    </Draggable>
                                ))
                                :
                                <p className="no-items-left">No todo's here</p>
                            }
                            {provided.placeholder}
                    </div>)
                }
            </Droppable>
        </DragDropContext>
        </>
    );
}

export default TodoList;