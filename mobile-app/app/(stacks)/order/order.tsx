import { Container } from "@/components/layout/Container";
import { Title } from "@/components/typography/Title";
import { useFetch } from "@/hooks/useFetch";
import { Stack, useLocalSearchParams } from "expo-router";
import { getCustomerById } from "@/services/customer.service";
import { CustomerCard } from "@/components/card/CustomerCard";
import { Text, KeyboardAvoidingView, View } from "react-native";
import { Button } from "@/components/button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/product.service";
import { Input } from "@/components/form/Input";
import { Modal } from "@/components/layout/Modal";
import DropDownPicker from "react-native-dropdown-picker";
import { Colors } from "@/constants/colors";

export default function Order() {
  const { customerId } = useLocalSearchParams<{ customerId: string }>();

  const [openModal, setOpenModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);

  const { data: customer, state: customerState } = useFetch(() =>
    getCustomerById(parseInt(customerId)),
  );

  const [products, setProducts] = useState<{ label: string; value: string }[]>(
    [],
  );

  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts();
      const productOptions = products.map((p) => {
        return { label: p.productName, value: p.productId.toString() };
      });
      setProducts(productOptions);
    }
    getProducts();
  }, []);

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
        <DropDownPicker
          searchable
          searchPlaceholder="Rechercher un produit..."
          searchContainerStyle={{
            padding: 16,
          }}
          searchTextInputStyle={{
            padding: 16,
            borderWidth: 0,
          }}
          open={openDropdown}
          value={value}
          items={products}
          setOpen={setOpenDropdown}
          setValue={setValue}
          setItems={setProducts}
          style={{ marginBottom: 20, borderColor: Colors.black[100] }}
          textStyle={{ color: Colors.black[100] }}
          placeholder="Chosir un produit"
        />
        <KeyboardAvoidingView>
          <Input
            placeholder="Quantité"
            inputMode="numeric"
            returnKeyType="done"
          />
          <Button label="Valider" variant="success" className="mb-4" />
          <Button label="Annuler" variant="danger" />
        </KeyboardAvoidingView>
      </Modal>
    </Container>
  );
}
