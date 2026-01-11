import { Flex } from "../Flexible Component/Flex";

export const ShowText = ({ inputText, selectedItems, setSelectedItems }) => {
  const dragSelecting = false; // swap with a useState after creted the setting page

  const textList = inputText.trim();

  const IsItemAlreadyExist = (itemToCheck) => {
    // if Item is aldread exites give "true"
    if (selectedItems.includes(itemToCheck)) {
      return true;
    }
    return false;
  };

  const handleClicks = () => {};

  const handleDoubleClickds = () => {};

  const handleMouseUp = () => {
    if (dragSelecting) {
      const selection = window.getSelection();
      let selectedText = selection.toString().trim();
      if (!selectedText) return; // do nothing if nothing
      selectedText = selectedText.replace(/\n/g, " ");

      if (!IsItemAlreadyExist(selectedText)) {
        setSelectedItems([...selectedItems, selectedText]);
      }
      selection.removeAllRanges();
    }
  };

  const spanStyle = {
    paddingRight: "8px",
    marginBottom: "8px",
    cursor: "text",
  };

  return (
    <Flex
      w={"100%"}
      direction={"row"}
      wrap={"wrap"}
      onMouseUp={handleMouseUp}
      pb={"20px"}
      style={{ borderBottom: "1px solid gray" }}
    >
      {textList.split(" ").map((word, i) => {
        return (
          <span
            key={i}
            data-id={i}
            data-word={word}
            style={spanStyle}
            onClick={handleClicks}
            onDoubleClick={handleDoubleClickds}
          >
            {word}
          </span>
        );
      })}
    </Flex>
  );
};
