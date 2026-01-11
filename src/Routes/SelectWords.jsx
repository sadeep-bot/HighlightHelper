import { useState } from "react";
import { HStack } from "../Flexible Component/HStack";
import { VStack } from "../Flexible Component/VStack";
import { Flex } from "../Flexible Component/Flex";

import { Instructions } from "../components/Instructions";
import { ParagraphField } from "../components/ParagraphField";
//import { Context } from "./Context";

export const SelectWords = () => {
  const [inputText, setInputText] = useState(
    `Catelyn looked at Bran in his sickbed and brushed his hair back off his forehead. It had grown very long, she realized. She would have to cut it soon. “I have no need to look at figures, Maester Luwin,” she told him, never taking her eyes from Bran. “I know what the visit cost us. Take the books away.”`
  );
  const [instructions, setInstructions] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <VStack w={"100%"} maxW={"800px"} minW={"600px"}>
      <Instructions
        instructions={instructions}
        setInstructions={setInstructions}
      ></Instructions>
      <ParagraphField
        inputText={inputText}
        setInputText={setInputText}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        instructions={instructions}
      />
    </VStack>
  );
};
