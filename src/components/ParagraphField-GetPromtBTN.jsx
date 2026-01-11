export const GetPromtBTN = ({ selectedItems, inputText, instructions }) => {
  const openInBrowser = false;

  const createPrompt = () => {
    return `${instructions} \n\n Here is the paragraph:\n ${inputText} \n\n Here are the things I find most difficult to understand:\n ${selectedItems}`;
  };

  const copyThePrompt = async () => {
    try {
      await navigator.clipboard.writeText(createPrompt());
    } catch {
      alert("Could not copy to clipboard.");
    }
  };

  const openChatGPT = () => {
    const prompt = createPrompt();
    const encoded = encodeURIComponent(prompt);
    window.open(`https://chat.openai.com/?q=${encoded}`, "_blank");
  };
  {
    /*
  const openChatGPTPopup = () => {
    const prompt = createPrompt();
    const encoded = encodeURIComponent(prompt);

    const url = `https://chat.openai.com/?q=${encoded}`;

    // popup window settings
    const features = `
      width=900,
      height=800,
      top=100,
      left=100,
      resizable=yes,
      scrollbars=yes
    `;

    window.open(url, "chatgptPopup", features);
  }; */
  }

  const handelClick = () => {
    copyThePrompt();

    if (openInBrowser) {
      openChatGPT();
    }
    //openChatGPTPopup();
  };

  // Style
  const PromtBTN = {
    background: "green",
    border: "none",
    padding: "8px 15px",
    marginBottom: "5px",
    borderRadius: "5px",
  };
  return (
    <button
      className="general-buttons neutral-button-scheme"
      onClick={handelClick}
      style={PromtBTN}
    >
      Get The Promt
    </button>
  );
};
