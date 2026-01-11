import { useRef, useState, useEffect } from "react";

export const InstructionsDisplay = ({
  instructions,
  textAreaStyle,
  resizeTextarea,
  setIsEditing,
}) => {
  return (
    <>
      <AllowEditBTN setIsEditing={setIsEditing} />{" "}
      <ShowInstructions
        instructions={instructions}
        textAreaStyle={textAreaStyle}
        resizeTextarea={resizeTextarea}
      />
    </>
  );
};

const AllowEditBTN = ({ setIsEditing }) => {
  const handleEditBTN = () => {
    setIsEditing(true);
  };
  return (
    <button
      className="general-buttons neutral-button-scheme"
      onClick={handleEditBTN}
    >
      Edit Instructions
    </button>
  );
};

const ShowInstructions = ({ instructions, textAreaStyle, resizeTextarea }) => {
  const shortLength = 200;
  const [showFullIntructions, setShowFullInstructions] = useState(false);
  const isLongEnough = instructions.length > shortLength;
  const instructionsArea = useRef(null);

  const displayText =
    isLongEnough && !showFullIntructions
      ? `${instructions.slice(0, shortLength)}...`
      : instructions;

  const handelToggel = () => {
    setShowFullInstructions(!showFullIntructions);
  };

  useEffect(() => {
    resizeTextarea(instructionsArea.current);
  }, [showFullIntructions]);

  return (
    <>
      <textarea
        ref={instructionsArea}
        readOnly
        value={displayText}
        style={textAreaStyle}
      ></textarea>
      {isLongEnough ? (
        <button onClick={handelToggel} className="neutral-button-scheme">
          {showFullIntructions ? "see less" : "see more"}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
