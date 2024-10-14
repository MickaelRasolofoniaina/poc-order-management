import { Text, TextProps } from "react-native";

export type TitleProps = TextProps;

export const Title: React.FC<TitleProps> = ({ children, style, ...props }) => {
  return (
    <Text className="font-Inter600 mb-4 text-2xl" {...props}>
      {children}
    </Text>
  );
};
