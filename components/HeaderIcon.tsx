import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { Pressable, PressableProps } from "react-native";

interface HeaderIconProps extends PressableProps {
  fontName: string;
}
const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
  const { fontName } = props;

  return (
    <Pressable
      {...props}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eeeeff",
      }}
    >
      <FontAwesome name={fontName} size={18} />
    </Pressable>
  );
};

export default HeaderIcon;
