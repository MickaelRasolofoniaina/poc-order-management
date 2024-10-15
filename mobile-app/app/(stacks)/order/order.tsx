import { Container } from "@/components/layout/Container";
import { Title } from "@/components/typography/Title";
import { useFetch } from "@/hooks/useFetch";
import { Stack, useLocalSearchParams } from "expo-router";
import { Customer } from "@/models/customer.model";
import { getCustomerById } from "@/services/customer.service";
import { CustomerCard } from "@/components/card/CustomerCard";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@/components/button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCallback, useMemo, useRef, useState } from "react";
import { getAllProducts } from "@/services/product.service";
import { Input } from "@/components/form/Input";
import { Modal } from "@/components/layout/Modal";

export default function Order() {
  const { customerId } = useLocalSearchParams<{ customerId: string }>();

  const [openModal, setOpenModal] = useState(false);

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
      <Button label="Ajouter un article" onPress={() => setOpenModal(true)}>
        <AntDesign name="pluscircleo" size={24} color="white" />
      </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <KeyboardAvoidingView>
          <Input
            placeholder="Quantité"
            inputMode="numeric"
            returnKeyType="done"
          />
          <Button label="Valider" variant="success" />
        </KeyboardAvoidingView>
      </Modal>
    </Container>
  );
}
