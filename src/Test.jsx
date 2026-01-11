import { useState } from "react";

export const Test = () => {
  const textAreaStyle = {
    marginTop: "100px",
    minWidth: "500px",
    maxWidth: "500px",
    minHeight: "100px",
    height: "auto",
    boxSizing: "border-box",
  };
  const textList = `Catelyn looked at Bran in his sickbed and brushed his hair back off his forehead. It had grown very long, she realized. She would have to cut it soon. “I have no need to look at figures, Maester Luwin,” she told him, never taking her eyes from Bran. “I know what the visit cost us. Take the books away.”`;

  const [selectedText, setSelectedText] = useState("");

  const handelClick = () => {
    console.log(selectedText);
  };

  const handelOnSelect = (e) => {
    const textarea = e.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // 2. Extract the selected text and store it in state
    const text = textarea.value.substring(start, end);
    setSelectedText(text);
  };

  const handelChange = () => {};

  return (
    <>
      <textarea
        value={textList}
        onChange={handelChange}
        onSelect={(e) => {
          handelOnSelect(e);
        }}
        style={textAreaStyle}
      ></textarea>

      <br />

      <button onClick={handelClick}>Show</button>

      <p>{selectedText}</p>
    </>
  );
};
