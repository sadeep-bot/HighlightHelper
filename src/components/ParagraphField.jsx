import { VStack } from "../Flexible Component/VStack";

import { EnterText } from "./ParagraphFieldEnterText";
import { ShowText } from "./ParagraphFieldShowText2";
import { GetPromtBTN } from "./ParagraphField-GetPromtBTN";

export const ParagraphField = ({
  inputText,
  setInputText,
  selectedItems,
  setSelectedItems,
  instructions,
}) => {
  return (
    <VStack gap={"20px"} minW={"600px"} border={"2px solid gray"}>
      <EnterText inputText={inputText} setInputText={setInputText} />

      <ShowText
        inputText={inputText}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <GetPromtBTN
        selectedItems={selectedItems}
        inputText={inputText}
        instructions={instructions}
      />
    </VStack>
  );
};
