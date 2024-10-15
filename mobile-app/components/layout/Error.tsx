import React from "react";
import { Text } from "react-native";
import { Container } from "./Container";
import { Link, Stack } from "expo-router";

type ErrorProps = {
  message?: string;
};

export const Error: React.FC<ErrorProps> = ({
  message = "Oops! Une erreur s'est produite",
}) => {
  return (
    <Container className="bg-red-100 items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="text-white-100 mb-4 font-Inter600 text-lg">
        {message}
      </Text>
      <Link
        href="/"
        className="text-white-100 font-Inter400 text-base underline"
      >
        Retour à l'accueil
      </Link>
    </Container>
  );
};
