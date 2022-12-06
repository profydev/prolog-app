import { createContext, useContext } from "react";

export const SelectContext = createContext<{
  selectedOption: string;
  changeSelectedOption: (option: string) => void;
}>({
  selectedOption: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  changeSelectedOption: (option: string) => {},
});

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};
