import { TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export type AddButtonProps = {
  onPress: () => void;
};

export const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="bg-green-100 flex h-[60] w-[60] items-center justify-center rounded-full"
      onPress={onPress}
    >
      <Entypo name="plus" size={34} color="white" />
    </TouchableOpacity>
  );
};
