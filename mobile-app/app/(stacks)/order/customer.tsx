import { Container } from "@/components/layout/Container";
import { Error } from "@/components/layout/Error";
import { Title } from "@/components/typography/Title";
import { router, Stack } from "expo-router";
import { Customer as CustomerData } from "@/models/customer.model";
import { getAllCustomers } from "@/services/customer.service";
import { useFetch } from "@/hooks/useFetch";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

export default function Customer() {
  const { data: customers, state } = useFetch<CustomerData[]>(() =>
    getAllCustomers(),
  );

  if (state === "error") {
    return <Error />;
  }

  return (
    <Container>
      <Stack.Screen options={{ title: "Liste des clients" }} />
      <Title>Choisir le client</Title>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={customers}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                router.push(`/order/order?customerId=${item.customerId}`)
              }
            >
              <View className="bg-white-100 mb-4 rounded-md p-4">
                <Text>{item.companyName}</Text>
                <Text className="italic">{item.address}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}
