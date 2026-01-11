import { useEffect, useRef } from "react";

import { HStack } from "../Flexible Component/HStack";

export const InstructionsInput = ({
  instructions,
  setInstructions,
  textAreaStyle,
  resizeTextarea,
  setIsEditing,
  buttonStyle,
}) => {
  return (
    <>
      <GetInstructionsInput
        instructions={instructions}
        setInstructions={setInstructions}
        textAreaStyle={textAreaStyle}
        resizeTextarea={resizeTextarea}
      />
      <InputRelatedBTNS
        setIsEditing={setIsEditing}
        setInstructions={setInstructions}
        instructions={instructions}
        buttonStyle={buttonStyle}
      />
    </>
  );
};

// input

const GetInstructionsInput = ({
  instructions,
  setInstructions,
  textAreaStyle,
  resizeTextarea,
}) => {
  const inputArea = useRef(null);

  useEffect(() => {
    resizeTextarea(inputArea.current);
  }, []);

  const handleChange = (e) => {
    setInstructions(e.target.value);
    resizeTextarea(inputArea.current);
  };

  return (
    <textarea
      ref={inputArea}
      value={instructions}
      onChange={(e) => handleChange(e)}
      style={textAreaStyle}
    ></textarea>
  );
};

// Buttons

const InputRelatedBTNS = ({
  setIsEditing,
  setInstructions,
  instructions,
  buttonStyle,
}) => {
  const handleClearBTN = () => {
    setInstructions("");
  };
  const handleSaveBTN = () => {
    localStorage.setItem("instructions", instructions);
    setIsEditing(false);
  };

  return (
    <HStack mb={"5px"}>
      <button
        className="general-buttons neutral-button-scheme"
        onClick={handleClearBTN}
        style={buttonStyle}
      >
        Clear instructions
      </button>
      <button
        className="general-buttons neutral-button-scheme"
        onClick={handleSaveBTN}
        style={buttonStyle}
      >
        {" "}
        Save Changes
      </button>
    </HStack>
  );
};
