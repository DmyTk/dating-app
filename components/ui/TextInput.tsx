import classNames from "classnames";
import { ComponentProps, FC, ReactElement } from "react";
import { TextInput as RNTextInput, View } from "react-native";

type TextInputProps = ComponentProps<typeof RNTextInput>;

type Props = {
  Icon?: ReactElement;
  wrapperClassName?: string;
} & TextInputProps;

const TextInput: FC<Props> = ({ Icon, wrapperClassName, ...inputProps }) => {
  return (
    <View
      className={classNames(
        "flex-row rounded border border-gray-300 bg-white p-2",
        wrapperClassName,
      )}
      style={{ gap: 4 }}
    >
      {!!Icon && Icon}
      <RNTextInput {...inputProps} />
    </View>
  );
};

export default TextInput;
