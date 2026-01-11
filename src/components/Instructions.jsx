import { useEffect, useState } from "react";

import { HStack } from "../Flexible Component/HStack";

import { VStack } from "../Flexible Component/VStack";

import { InstructionsDisplay } from "./InstructionsDisplay";
import { InstructionsInput } from "./InstructionsInput";

export const Instructions = ({ instructions, setInstructions }) => {
  const BildInInstructions = `You are an English tutor for a non-native English reader. 
I will give you a paragraph and then a list of words or sentences I do not understand.

Your job:
• Explain the meaning in simple and clear English  
• Mention if something is an idiom, metaphor, figurative expression, or old-style English  
• Explain any grammar or sentence structure only if it helps  
• Keep explanations short and easy to understand  
• Use examples only when needed`;

  useEffect(() => {
    const defultInstructions = localStorage.getItem("instructions");
    if (!instructions) {
      setInstructions(defultInstructions || BildInInstructions);
    }
    if (!defultInstructions) {
      setIsEditing(true);
    }
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  //  Style  //
  const resizeTextarea = (el) => {
    // style related function
    if (!el) return;
    el.style.height = "auto"; // allow shrinking
    el.style.height = `${el.scrollHeight}px`; // expand to fit content
  };

  const textAreaStyle = {
    minWidth: "99%",
    maxWidth: "99%",
    minHeight: "50px",
    height: "auto",
    boxSizing: "border-box",
  };

  return (
    <VStack w={"100%"} minW={"500px"} border={"2px solid gray"} mt={"30px"}>
      {isEditing ? (
        <InstructionsInput
          instructions={instructions}
          setInstructions={setInstructions}
          textAreaStyle={textAreaStyle}
          resizeTextarea={resizeTextarea}
          setIsEditing={setIsEditing}
        />
      ) : (
        <InstructionsDisplay
          instructions={instructions}
          textAreaStyle={textAreaStyle}
          resizeTextarea={resizeTextarea}
          setIsEditing={setIsEditing}
        />
      )}
    </VStack>
  );
};
