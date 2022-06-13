import { useState, useEffect, useCallback, createContext } from "react";
import useSemiPresistentState from "./useSemiPresistenceState";
import data from "./data";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [todoList, setTodoList] = useSemiPresistentState('h5#43',data);
    const [newTodoList, setNewTodoList] = useState(todoList);
    const [todoLeft, setTodoLeft] = useState(0);
    const [filter, setFilter] = useState('all');
  
  
    useEffect(() => {
      setNewTodoList(todoList);
    }, [todoList]);
  
  
    useEffect(() => {
      const uncompleted = newTodoList.reduce((left, item) => {
        if(!item.completed){
          return left + 1;
        } else {
          return left;
        }
      }, 0);
      setTodoLeft(uncompleted);
    }, [newTodoList]);
  
    const onFilterChange = useCallback(() => {
      if(filter === 'all'){
        setNewTodoList(todoList);
      } else if(filter === 'active') {
        setNewTodoList(todoList.filter(item => item.completed === false ));
      } else if(filter === 'completed') {
        setNewTodoList(todoList.filter(item => item.completed === true ));
      }
    }, [filter, todoList]);
  
    useEffect(() => {
      onFilterChange()
    }, [onFilterChange, filter]);
  
  
    const onCreateTodo = (todoValue) => {
      const id = todoList.reduce((max, current) => Number(current.id) > max ? Number(current.id) : max, 0);
      const newTodo = {id:id + 1, completed:false, task:todoValue};
      setTodoList([...todoList, newTodo]);
      setFilter('all');
    }
  
    const onTodoStatusChange = (todoId) => {
      const newTodo = todoList.map(item => {
        if(item.id === todoId){
          return {...item, completed:!item.completed};
        } else {
          return item
        }
      });
      setTodoList(newTodo);
    }
  
    const onRemoveTodo = (todoId) => {
      const newTodo = todoList.filter(item => item.id !== todoId);
      setTodoList(newTodo);
    }
  
    const onClearCompleted = () => {
      const newTodo = todoList.filter(item => item.completed === false);
      setTodoList(newTodo);
      setFilter('all');
    }

    const handelOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(newTodoList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setNewTodoList(items);
        if(filter === 'all'){
          setTodoList(items);
        }
    }

    return (
        <DataContext.Provider value={{
            onCreateTodo, newTodoList, onTodoStatusChange,
            onRemoveTodo, todoLeft, filter,
            setFilter, onClearCompleted, handelOnDragEnd
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;