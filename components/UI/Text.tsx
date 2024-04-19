import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import React from "react";
import { fontSizes } from "../../config/Theme";

interface CustomTextProps extends RNTextProps {
  size?: keyof typeof fontSizes;
}
const Text: React.FC<CustomTextProps> = (props) => {
  let fontSize: number;
  let fontWeight: TextStyle["fontWeight"] = "normal";

  switch (props.size) {
    case "small":
      fontSize = fontSizes.small;
      fontWeight = "normal";
      break;
    case "h1":
      fontSize = fontSizes.h1;
      fontWeight = "bold";
      break;
    case "h2":
      fontSize = fontSizes.h2;
      fontWeight = "bold";
      break;
    case "h3":
      fontSize = fontSizes.h3;
      fontWeight = "bold";
      break;
    default:
      fontSize = fontSizes.regular;
      fontWeight = "normal";
  }

  return (
    <RNText {...props} style={[{ fontSize, fontWeight }, props.style]}>
      {props.children}
    </RNText>
  );
};

export default Text;
