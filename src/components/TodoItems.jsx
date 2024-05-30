import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
