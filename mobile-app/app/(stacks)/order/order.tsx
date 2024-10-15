import { Container } from "@/components/layout/Container";
import { Title } from "@/components/typography/Title";
import { useFetch } from "@/hooks/useFetch";
import { Stack, useLocalSearchParams } from "expo-router";
import { Customer } from "@/models/customer.model";
import { getCustomerById } from "@/services/customer.service";
import { CustomerCard } from "@/components/card/CustomerCard";
import { Text, View, TouchableOpacity } from "react-native";
import { Button } from "@/components/button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCallback, useMemo, useRef, useState } from "react";
import { getAllProducts } from "@/services/product.service";
import { Input } from "@/components/form/Input";

export default function Order() {
  const { customerId } = useLocalSearchParams<{ customerId: string }>();

  const { data: customer, state: customerState } = useFetch(() =>
    getCustomerById(parseInt(customerId)),
  );

  const { data: products, state: productState } = useFetch(() =>
    getAllProducts(),
  );

  return (
    <Container>
      <Stack.Screen options={{ title: "Commande" }} />
      <Title>Client</Title>
      {customerState === "loading" && (
        <Text className="text-sm italic">
          Chargement de l'information du client...
        </Text>
      )}
      {customer && <CustomerCard customer={customer} />}
      <Title>Articles</Title>
      <Text className="mb-4 text-center text-sm italic">
        Aucun article pour le moment
      </Text>
      <Button
        label="Ajouter un article"
        variant="success"
        //onPress={openBottomSheet}
      >
        <AntDesign name="pluscircleo" size={24} color="white" />
      </Button>
      {/* {sheetOpen && (
          <TouchableOpacity
            onPress={closeBottomSheet}
            className="bg-black-100 absolute bottom-0 left-0 right-0 top-0 opacity-50"
          />
        )} */}
    </Container>
  );
}
