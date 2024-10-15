import clsx from "clsx";
import {
  TouchableOpacity,
  type TouchableOpacityProps,
  Text,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  variant?: "success" | "danger" | "warning" | "default";
};

const colors = {
  success: "bg-green-100",
  danger: "bg-red-100",
  warning: "bg-red-200",
  default: "bg-grey-100",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  label,
  children,
  className,
  ...props
}) => {
  return (
    <TouchableOpacity
      className={clsx([
        colors[variant],
        "bg-green-100 flex-row items-center justify-center p-4",
      ])}
      {...props}
    >
      <Text className="text-white-100 mr-4 text-base">{label}</Text>
      {children}
    </TouchableOpacity>
  );
};
