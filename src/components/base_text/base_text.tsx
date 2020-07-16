/* REACT */
import React from "react";
import { Text } from "react-native";

/* MODULES */
import { Translation } from "react-i18next";

/* STYLES */
import styles from "./styles";

/* TYPES */
export interface Props {
  children?: string;
  textKey?: string;
  // TODO: check type of style.
  style?: React.CSSProperties;
  isTitle?: boolean;
  numberOfLines?: number;
}

export default (props: Props) => {
  const { style, children, isTitle, textKey, ...restProps } = props;

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={1}
      ellipsizeMode="tail"
      {...restProps}
      style={[
        styles.text,
        isTitle && styles.title,
        ...(Array.isArray(style) ? style : [style]),
      ]}>
      {/* TODO: add type for (t:) */}
      {textKey ? <Translation>{(t) => t(textKey)}</Translation> : children}
    </Text>
  );
};
