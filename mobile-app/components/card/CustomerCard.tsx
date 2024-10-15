import { Customer as CustomerData } from "@/models/customer.model";
import { View, Text } from "react-native";

type CustomerCardProps = {
  customer: CustomerData;
};

export const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  return (
    <View className="bg-white-100 mb-4 rounded-md p-4">
      <Text className="mb-2">
        <Text className="font-Inter700">Customer Id: </Text>{" "}
        {customer.customerId}
      </Text>
      <Text className="mb-2">
        <Text className="font-Inter700">Compagnie: </Text>{" "}
        {customer.companyName}
      </Text>
      <Text className="mb-2">
        <Text className="font-Inter700">Adresse: </Text> {customer.address}
      </Text>
      <Text className="mb-2">
        <Text className="font-Inter700">Pays: </Text> {customer.country}
      </Text>
    </View>
  );
};
