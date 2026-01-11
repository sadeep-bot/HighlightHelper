import { useRef } from "react";

import { HStack } from "../Flexible Component/HStack";

export const EnterText = ({ inputText, setInputText }) => {
  const inputRef = useRef(null);

  const onInputChange = () => {
    setInputText(inputRef.current.value);
  };
  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      onInputChange();
    }
  };

  const handelClick = () => {
    onInputChange();
  };
  return (
    <HStack minH={"50px"}>
      <input
        width={"80%"}
        ref={inputRef}
        value={inputText}
        onChange={onInputChange}
        onKeyDown={(e) => {
          onEnterKeyDown(e);
        }}
        type="text"
        style={{ height: "30px", width: "200px" }}
      />
      <button
        className="neutral-button-scheme general-buttons"
        style={{ height: "30px" }}
        onClick={handelClick}
      >
        Enter
      </button>
    </HStack>
  );
};
