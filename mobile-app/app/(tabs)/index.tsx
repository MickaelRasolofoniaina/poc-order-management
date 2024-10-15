import { Container } from "@/components/layout/Container";
import { Title } from "@/components/typography/Title";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { AddButton } from "@/components/button/Fab";
import { router, useFocusEffect } from "expo-router";
import { getAllOrders } from "@/services/order.service";
import { useCallback, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/colors";
import { Modal } from "@/components/layout/Modal";
import { OrderData } from "@/models/order.model";

export default function HomeScreen() {
  const [data, setData] = useState<Record<number, OrderData> | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(-1);
  const selectedOrder =
    selectedOrderId !== -1 && data ? data[selectedOrderId] : null;

  const orders: OrderData[] = data ? Object.values(data) : [];

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
          <View className="mb-4 flex-row items-center justify-between rounded-md bg-white-100 p-4">
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
            <TouchableOpacity
              onPress={() => setSelectedOrderId(item.order.orderId)}
            >
              <AntDesign name="infocirlce" size={24} color={Colors.grey[100]} />
            </TouchableOpacity>
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
      <Modal
        scrollable
        open={selectedOrderId !== -1}
        onClose={() => setSelectedOrderId(-1)}
      >
        <View className="rounded-md bg-white-100 p-4">
          <View className="mb-4">
            <Text className="mb-2 font-Inter800 text-lg">CLIENTS</Text>
            <Text className="mb-2">
              <Text className="font-Inter700">ID:</Text>{" "}
              {selectedOrder?.customer.customerId}
            </Text>
            <Text className="mb-2">
              <Text className="font-Inter700">Compagnie:</Text>{" "}
              {selectedOrder?.customer.companyName}
            </Text>
            <Text className="mb-2">
              <Text className="font-Inter700">Addresse:</Text>{" "}
              {selectedOrder?.customer.address}
            </Text>
          </View>
          <View className="mb-4">
            <Text className="mb-2 font-Inter800 text-lg">COMMANDE</Text>
            <Text className="mb-2">
              <Text className="font-Inter700">ID:</Text>{" "}
              {selectedOrder?.order.orderId}
            </Text>
            <Text className="mb-2">
              <Text className="font-Inter700">Date:</Text>{" "}
              {selectedOrder?.order.orderDate &&
                new Date(selectedOrder?.order.orderDate).toLocaleDateString()}
            </Text>
          </View>
          <View className="mb-4">
            <Text className="mb-2 font-Inter800 text-lg">ARTICLES</Text>
            <View className="flex-row flex-wrap gap-4">
              {selectedOrder?.detailOrder.map((item) => (
                <View className="mb-2" key={item.productId}>
                  <Text className="mb-2">
                    <Text className="font-Inter700">ID:</Text> {item.productId}
                  </Text>

                  <Text className="mb-2">
                    <Text className="font-Inter700">Quantité:</Text>{" "}
                    {item.quantity}
                  </Text>
                  <Text className="mb-2">
                    <Text className="font-Inter700">Prix:</Text>{" "}
                    {item.unitPrice}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View className="mb-4 items-center justify-center">
            <Text className="text-lg">
              {" "}
              <Text className="mb-2 font-Inter800">TOTAL: </Text>
              {selectedOrder?.detailOrder
                .reduce((acc, item) => acc + item.unitPrice * item.quantity, 0)
                .toFixed(2)}
            </Text>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
