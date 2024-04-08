import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import React, { useEffect } from "react";
import { I18nManager } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { spacing } from "./Colors";

interface TabItemsProps {
  children: JSX.Element[];
  containerStyle?: ViewStyle;
  index: number;
  animated?: boolean;
}
const WindowWidth = Dimensions.get("window").width;

const TabItems = ({
  children,
  containerStyle,
  index,
  animated = true,
}: TabItemsProps) => {
  const direction = I18nManager.isRTL ? 1 : -1;
  const translateX = useSharedValue(index * WindowWidth * direction);

  useEffect(() => {
    translateX.value = !animated
      ? index * WindowWidth * direction
      : withSpring(index * WindowWidth * direction);
  }, [animated, direction, index, translateX]);

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: spacing.md,
        },
        containerStyle,
      ]}
    >
      {React.Children.toArray(children).map((child, i) => {
        return (
          <Animated.View
            style={{
              width: WindowWidth,
              transform: [
                {
                  translateX,
                },
              ],
            }}
            key={i}
          >
            {child}
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default TabItems;
