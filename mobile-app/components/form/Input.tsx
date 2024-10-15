import { Colors } from "@/constants/colors";
import { TextInput, type TextInputProps } from "react-native";

type InputProps = TextInputProps;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <TextInput
      className="bg-grey-400 text-black-100 mb-4 rounded-md p-4"
      placeholderTextColor={Colors.black[100]}
      {...props}
    />
  );
};
