import { ViewProps } from "react-native";
import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeContainerProps = ViewProps & {
    addPadding?: boolean;
};

export const SafeContainer: React.FC<SafeContainerProps> = ({ children, addPadding = true, ...props }) => {
  return (
    <SafeAreaView {...props} className={clsx([{
        "p-4": addPadding,
    }, "flex-1 bg-primary-600"])}>
      {children}
    </SafeAreaView>
  );
};