import { type ViewProps, View } from "react-native";
import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

type ContainerProps = ViewProps & {
  addPadding?: boolean;
};

export const SafeContainer: React.FC<ContainerProps> = ({
  children,
  addPadding = true,
  className,
  ...props
}) => {
  return (
    <SafeAreaView
      {...props}
      className={clsx([{ "p-4": addPadding, className }], "flex-1")}
    >
      {children}
    </SafeAreaView>
  );
};

export const Container: React.FC<ContainerProps> = ({
  children,
  addPadding = true,
  className,
  ...props
}) => {
  return (
    <View
      {...props}
      className={clsx([{ "p-4": addPadding, className }], "flex-1")}
    >
      {children}
    </View>
  );
};
