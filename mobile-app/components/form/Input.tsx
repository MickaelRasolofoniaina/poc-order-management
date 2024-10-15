import { type TextInputProps } from "react-native";

type InputProps = TextInputProps;

export const Input: React.FC<InputProps> = (props) => {
  return <Input className="" {...props} />;
};
