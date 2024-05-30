import { MdOutlineDeleteForever } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row sid-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger sid-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdOutlineDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
