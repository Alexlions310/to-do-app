import "./index.css";
import completed from "../../assets/check-solid.svg";
import deleted from "../../assets/trash-solid.svg";

const ToDoList = (props) => {
  let check =  props.checkedVal;
  
  return (
    <li className="li" >
      <span style={(check && { textDecoration: "line-through" }) || {}}>
        {props.item}
      </span>{" "}
      <span>
        <img
          className="completed"
          onClick={() => props.checked(props.idx)}
          src={completed}
          alt=""
        />{" "}
        <img
          className="deleted"
          src={deleted}
          alt=""
          onClick={() => props.onDelete(props.idx)}
        />
      </span>
    </li>
  );
};

export default ToDoList;
