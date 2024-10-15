import { Container } from "@/components/layout/Container";
import { Title } from "@/components/typography/Title";
import { FlatList, View, Text } from "react-native";
import { AddButton } from "@/components/button/Fab";
import { router, useFocusEffect } from "expo-router";
import { getAllOrders } from "@/services/order.service";
import { useCallback, useState } from "react";

export default function HomeScreen() {
  const [data, setData] = useState<Record<number, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const orders = data ? Object.values(data) : [];

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await getAllOrders();
      setData(result);
    } catch {
      alert("Une erreur s'est produite");
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData]),
  );

  return (
    <Container safe>
      <Title>Commande</Title>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orders}
        keyExtractor={(item) => item.order.orderId.toString()}
        renderItem={({ item }) => (
          <View className="mb-4 flex-row rounded-md bg-white-100 p-4">
            <View>
              <Text className="mb-2">
                <Text className="font-Inter700">ID:</Text> {item.order.orderId}
              </Text>
              <Text className="mb-2">
                <Text className="font-Inter700">Client:</Text>{" "}
                {item.customer.companyName}
              </Text>
              <Text className="mb-2">
                <Text className="font-Inter700">Date:</Text>{" "}
                {new Date(item.order.orderDate).toLocaleDateString()}
              </Text>
            </View>
            {/* <TouchableOpacity>

            </TouchableOpacity> */}
          </View>
        )}
        ListEmptyComponent={
          <Text className="mb-4 text-center text-sm italic">
            Aucune commande pour le moment
          </Text>
        }
        refreshing={loading}
      />
      <View className="absolute bottom-[40] right-[16]">
        <AddButton
          onPress={() => {
            router.push("/order/customer");
          }}
        />
      </View>
    </Container>
  );
}
