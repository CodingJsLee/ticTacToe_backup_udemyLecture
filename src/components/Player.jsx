import { useEffect, useRef, useState } from "react";

export default function Player(props) {
  const { initialName, symbol } = props;
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const inputBox = useRef(null);

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        ref={inputBox}
        required
        value={playerName}
        onChange={handleChange}
      />
    );
    // btnCaption = "Save";
  }
  const handleEditClick = () => {
    // isEditing ? setIsEditing(false) : setIsEditing(true);
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    // setIsEditing(!isEditing);
    setIsEditing((swch) => !swch);
  };

  function handleChange(e) {
    console.log(e);

    setPlayerName(e.target.value);
  }

  useEffect(() => {
    if (isEditing) {
      const input = inputBox.current;
      if (input) {
        input.focus();
        input.select();
      }
    }
  }, [isEditing]);

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
