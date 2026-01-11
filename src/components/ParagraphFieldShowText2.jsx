import { useState } from "react";
import { Flex } from "../Flexible Component/Flex";

export const ShowText = ({ inputText, selectedItems, setSelectedItems }) => {
  const dragSelecting = false; // swap with a useState after creted the setting page

  const [selectedWordIds, setSelectedWordIds] = useState([]);
  const [startInd, setStartInd] = useState(null);
  const [selectedRange, setSelectedRange] = useState([]);

  const textList = inputText.trim();

  const IsItemAlreadyExist = (itemToCheck) => {
    // if Item is aldread exites give "true"
    if (selectedItems.includes(itemToCheck)) {
      return true;
    }
    return false;
  };

  const handleClicks = (e) => {
    const spanId = Number(e.currentTarget.dataset.id);

    if (selectedWordIds.includes(spanId)) {
      setSelectedWordIds((prev) => prev.filter((id) => id !== spanId));
      return;
    }

    setSelectedWordIds((prev) => [...prev, spanId]);
  };

  const handleDoubleClickds = (e) => {
    const spanId = Number(e.currentTarget.dataset.id);

    if (startInd === null) {
      setStartInd(spanId);
    } else if (startInd >= spanId) {
      setStartInd("");
    } else if (startInd < spanId) {
      setSelectedRange((prev) => [...prev, { start: startInd, end: spanId }]);
      setStartInd(null);
    }
  };

  const isIdInAnyRange = (id, ranges) => {
    return ranges.some((r) => r.start <= id && id <= r.end);
  };

  const isSelected = (id) => {
    if (selectedWordIds.includes(id)) {
      return true;
    } else if (isIdInAnyRange(id, selectedRange)) {
      return true;
    }
    return false;
  };

  const spanStyle = {
    paddingRight: "8px",
    marginBottom: "8px",
    cursor: "text",
  };

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
        if (isSelected(i)) {
          return (
            <span
              key={i}
              data-id={i}
              data-word={word}
              style={spanStyle}
              className="selected-spans"
              onClick={handleClicks}
              onDoubleClick={handleDoubleClickds}
            >
              {word}
            </span>
          );
        }
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
