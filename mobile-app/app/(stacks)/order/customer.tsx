import { Title } from "@/components/typography/Title";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Customer() {
  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: "Client" }} />
      <Title>Choisir le client</Title>
    </View>
  );
}
