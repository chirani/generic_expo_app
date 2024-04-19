import { spacing } from "../../config/Theme";
import Text from "./Text";
import { Pressable, PressableProps } from "react-native";
import Animated, {
  useSharedValue,
  interpolateColor,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

interface ListItemProps extends PressableProps {
  title: string;
}

const ListItem = (props: ListItemProps) => {
  const colorValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        colorValue.value,
        [0, 1],
        ["white", "#eff6ff"]
      ),
    };
  });

  return (
    <Pressable
      {...props}
      onPressIn={(e) => {
        colorValue.value = withSpring(1 - colorValue.value);
        props.onPressIn && props.onPressIn(e);
      }}
      onPressOut={(e) => {
        colorValue.value = 0;
        props.onPressOut && props.onPressOut(e);
      }}
    >
      <Animated.View
        style={[
          {
            paddingHorizontal: 18,
            paddingVertical: 9,
            borderRadius: 8,
          },
          animatedStyle,
        ]}
      >
        <Text style={{ fontSize: 20 }}>{props.title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default ListItem;
