import { SafeContainer } from "@/components/layout/SafeContainer";
import { Title } from "@/components/typography/Title";
import { useEffect, useState } from "react";
import { getAllCustomers } from "@/services/customer.service";
import { Customer } from "@/models/customer.model";
import { FlatList } from "react-native";

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
    </SafeContainer>
  );
}
