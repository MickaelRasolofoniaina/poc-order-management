import { ViewProps } from "react-native";
import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeContainerProps = ViewProps & {
    addPadding?: boolean;
};

export const SafeContainer: React.FC<SafeContainerProps> = ({ children, addPadding = true, className, ...props }) => {
  return (
    <SafeAreaView {...props} className={clsx([{"p-4": addPadding, className}])}>
      {children}
    </SafeAreaView>
  );
};