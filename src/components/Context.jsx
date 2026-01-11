import { VStack } from "../Flexible Component/VStack";
import { HStack } from "../Flexible Component/HStack";

export const Context = () => {
  return (
    <VStack>
      <ContextForm />
      <ContextBTN />
    </VStack>
  );
};

const ContextForm = () => {
  return (
    <VStack>
      <label>Book:</label>
      <input type="text" />

      <label>Genre:</label>
      <input type="text" />

      <label>More:</label>
      <input type="text" />
    </VStack>
  );
};

const ContextBTN = () => {
  return (
    <HStack>
      <button>Clear</button>
      <button>Save</button>
    </HStack>
  );
};
