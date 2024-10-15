import { SafeContainer } from "@/components/layout/Container";
import { Title } from "@/components/typography/Title";
import { useEffect, useState } from "react";
import { getAllCustomers } from "@/services/customer.service";
import { Customer } from "@/models/customer.model";
import { FlatList, View } from "react-native";
import { AddButton } from "@/components/button/Fab";
import { router } from "expo-router";

export default function HomeScreen() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function fetchCustomers() {
      const data = await getAllCustomers();
      setCustomers(data);
    }

    fetchCustomers();
  }, []);

  return (
    <SafeContainer>
      <Title>Commande</Title>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.customerId.toString()}
        renderItem={({ item }) => (
          <Title>
            {item.companyName} {item.contactName}
          </Title>
        )}
      />
      <View className="absolute bottom-[64] right-[16]">
        <AddButton
          onPress={() => {
            router.push("/order/customer");
          }}
        />
      </View>
    </SafeContainer>
  );
}
