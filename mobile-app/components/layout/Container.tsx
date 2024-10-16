import { type ViewProps, View } from "react-native";
import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

type ContainerProps = ViewProps & {
  addPadding?: boolean;
  safe?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  safe = false,
  addPadding = true,
  className,
  ...props
}) => {
  const Parent = safe ? SafeAreaView : View;
  return (
    <Parent
      {...props}
      className={clsx([{ "p-4": addPadding, className }], "flex-1")}
    >
      {children}
    </Parent>
  );
};
