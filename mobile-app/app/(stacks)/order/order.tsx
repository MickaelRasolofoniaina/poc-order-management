import { Container } from "@/components/layout/Container";
import { Title } from "@/components/typography/Title";
import { useFetch } from "@/hooks/useFetch";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCustomerById } from "@/services/customer.service";
import { CustomerCard } from "@/components/card/CustomerCard";
import {
  Text,
  KeyboardAvoidingView,
  View,
  FlatList,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Button } from "@/components/button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/product.service";
import { Input } from "@/components/form/Input";
import { ConfirmationModal, Modal } from "@/components/layout/Modal";
import DropDownPicker from "react-native-dropdown-picker";
import { Colors } from "@/constants/colors";
import { Product } from "@/models/product.model";
import { addOrder } from "@/services/order.service";

type Article = {
  id: number;
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
};

export default function Order() {
  const { customerId } = useLocalSearchParams<{ customerId: string }>();

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [productOptions, setProductOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);

  const { data: customer, state: customerState } = useFetch(() =>
    getCustomerById(parseInt(customerId)),
  );

  const closeModal = () => {
    setSelectedProduct(null);
    setQuantity("");
    setOpenModal(false);
  };

  const onAddArticles = () => {
    if (!selectedProduct) return;

    const alreadyAddedArticle = articles.find(
      (a) => a.productId === parseInt(selectedProduct),
    );

    if (alreadyAddedArticle) {
      alert("Cet article a déjà été ajouté à la commande");
      return;
    }

    const product = products.find(
      (p) => p.productId === parseInt(selectedProduct),
    );

    if (product) {
      const article: Article = {
        id: articles.length + 1,
        productId: product.productId,
        productName: product.productName,
        unitPrice: product.unitPrice,
        quantity: parseInt(quantity),
      };
      const newArticles = [...articles, article];
      setArticles(newArticles);
      closeModal();
    }
  };

  const onOrderConfirmation = async () => {
    try {
      if (customer) {
        setOpenConfirmationModal(false);
        setLoading(true);
        await addOrder(customer.customerId, articles);
        router.navigate("/");
      }
    } catch (error) {
      alert(
        "Oups! Une erreur s'est produite lors de la validation de la commande",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts();
      const productOptions = products.map((p) => {
        return { label: p.productName, value: p.productId.toString() };
      });
      setProducts(products);
      setProductOptions(productOptions);
    }
    getProducts();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        className="flex-1"
        color={Colors.blue[100]}
      />
    );
  }

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
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mb-4 rounded-md bg-white-100 p-4">
            <Text className="mb-1">
              <Text className="font-Inter700">Produit: </Text>
              {item.productName}
            </Text>
            <Text className="mb-1">
              <Text className="font-Inter700">Quantité: </Text>
              {item.quantity}
            </Text>
            <Text className="mb-1">
              <Text className="font-Inter700">Prix unitaire: </Text>
              {item.unitPrice}
            </Text>
            <Text className="mb-1">
              <Text className="font-Inter700">Prix total: </Text>
              {item.unitPrice * item.quantity}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text className="mb-4 text-center text-sm italic">
            Aucun article pour le moment
          </Text>
        }
        ListFooterComponent={
          <>
            <Button
              label="Ajouter un article"
              onPress={() => setOpenModal(true)}
              className="mb-4"
            >
              <AntDesign name="pluscircleo" size={24} color="white" />
            </Button>
            <Button
              label="Valider la commande"
              onPress={() => setOpenConfirmationModal(true)}
              variant="success"
              disabled={articles.length === 0}
            >
              <AntDesign name="shoppingcart" size={24} color="white" />
            </Button>
          </>
        }
      />
      <Modal open={openModal} onClose={closeModal}>
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
          value={selectedProduct}
          items={productOptions}
          setOpen={setOpenDropdown}
          setValue={setSelectedProduct}
          setItems={setProductOptions}
          style={{ marginBottom: 20, borderColor: Colors.black[100] }}
          textStyle={{ color: Colors.black[100] }}
          placeholder="Chosir un produit"
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Input
            placeholder="Quantité"
            inputMode="numeric"
            returnKeyType="done"
            value={quantity}
            onChangeText={(quantity) => setQuantity(quantity)}
          />
          <Button
            label="Valider"
            variant="success"
            className="mb-4"
            onPress={onAddArticles}
            disabled={!selectedProduct || !quantity}
          />
          <Button label="Annuler" variant="danger" onPress={closeModal} />
        </KeyboardAvoidingView>
      </Modal>
      <ConfirmationModal
        open={openConfirmationModal}
        message="Valider la commande?"
        onClose={() => setOpenConfirmationModal(false)}
        onConfirm={onOrderConfirmation}
      />
    </Container>
  );
}
