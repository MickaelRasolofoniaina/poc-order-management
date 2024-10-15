import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button } from "../button/Button";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  scrollable?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  scrollable = false,
}) => {
  if (!open) return null;

  return (
    <View className="absolute bottom-0 left-0 right-0 top-0 justify-center px-8 py-16">
      <TouchableOpacity
        onPress={onClose}
        className="absolute bottom-0 left-0 right-0 top-0 bg-black-100 opacity-60"
      />
      <View className="rounded-md bg-white-100 p-4 pt-[50] opacity-100">
        <TouchableOpacity
          onPress={onClose}
          className="absolute right-[10] top-[10]"
        >
          <AntDesign name="closecircleo" size={24} color="red" />
        </TouchableOpacity>
        {scrollable ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </View>
    </View>
  );
};

export const ConfirmationModal: React.FC<{
  message: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}> = ({ message, open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Text className="mb-4 text-center font-Inter600 text-base">
        {message}
      </Text>
      <View className="flex-row gap-2">
        <Button
          label="Confirmer"
          onPress={onConfirm}
          variant="success"
          className="flex-1"
        />
        <Button
          label="Annuler"
          onPress={onClose}
          variant="danger"
          className="flex-1"
        />
      </View>
    </Modal>
  );
};
