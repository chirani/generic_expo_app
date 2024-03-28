import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width;

const MyTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const marginStart = useSharedValue(0);

  const IconNames: any = {
    InBox: "inbox",
    index: "home",
    MyProfile: "user",
    Search: "search",
  };

  return (
    <>
      <View
        style={{
          height: 4,
          width: "100%",
          backgroundColor: "white",
          flexDirection: "row",
        }}
      >
        <Animated.View
          style={{
            marginStart,
            height: 4,
            width: "25%",
            paddingHorizontal: 12,
          }}
        >
          <View
            style={{
              height: 4,
              flex: 1,
              backgroundColor: "#04524f",
              flexDirection: "row",
            }}
          />
        </Animated.View>
      </View>
      <View style={{ backgroundColor: "white", flexDirection: "row" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            marginStart.value = withTiming((windowWidth / 4) * index, {
              duration: 180,
              easing: Easing.inOut(Easing.quad),
            });
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center", paddingVertical: 12 }}
            >
              <FontAwesome
                name={IconNames[label]}
                size={20}
                color={isFocused ? "#04524f" : "#999"}
              />
              <Text
                style={{ color: isFocused ? "#04524f" : "#999", marginTop: 4 }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default MyTabBar;
