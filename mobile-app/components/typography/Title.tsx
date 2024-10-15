import { Text, TextProps } from "react-native";

export type TitleProps = TextProps;

export const Title: React.FC<TitleProps> = ({ children, style, ...props }) => {
  return (
    <Text className="mb-4 font-Inter600 text-lg" {...props}>
      {children}
    </Text>
  );
};
