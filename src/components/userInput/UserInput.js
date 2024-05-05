import { useState } from "react";
import "./index.css";

const UserInput = (props) => {
  let [inputVal, setInputVal] = useState("");
  
  const isChanged = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="userInput">
      <input
        onChange={(e) => {
          isChanged(e);
        }}
        value={inputVal}
        className="input-txt"
        type="text"
        name=""
        id=""
        placeholder="enter your to do list"
      />
      <input
        type="button"
        value="+"
        className="input-btn"
        onClick={() => {
          props.isClicked(inputVal);
          setInputVal("");
        }}
      />
    </div>
  );
};

export default UserInput;
