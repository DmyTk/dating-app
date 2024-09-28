import classNames from "classnames";
import { ComponentProps, FC, PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";

type Props = { variant?: "regular" | "circle" } & ComponentProps<
  typeof TouchableOpacity
>;

const Button: FC<PropsWithChildren<Props>> = ({
  variant = "regular",
  ...props
}) => {
  return (
    <TouchableOpacity
      className={classNames("p-2", {
        "rounded border border-gray-300": variant === "regular",
        "rounded-full": variant === "circle",
      })}
      {...props}
    />
  );
};

export default Button;
