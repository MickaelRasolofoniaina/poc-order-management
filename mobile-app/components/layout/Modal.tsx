import { TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <View className="absolute bottom-0 left-0 right-0 top-0 justify-center px-8">
      <TouchableOpacity
        onPress={onClose}
        className="bg-black-100 absolute bottom-0 left-0 right-0 top-0 opacity-60"
      />
      <View className="bg-white-100 min-h-[400] rounded-md p-4 pt-[50] opacity-100">
        <TouchableOpacity
          onPress={onClose}
          className="absolute right-[10] top-[10]"
        >
          <AntDesign name="closecircleo" size={24} color="red" />
        </TouchableOpacity>
        {children}
      </View>
    </View>
  );
};
