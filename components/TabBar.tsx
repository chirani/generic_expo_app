import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width;

const MyTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const marginStart = useSharedValue(0);

  const IconNames: any = {
    InBox: "inbox",
    index: "house",
    MyProfile: "user",
    Search: "magnifying-glass",
  };

  const titles: any = {
    InBox: "Inbox",
    index: "Home",
    MyProfile: "Profile",
    Search: "Search",
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
              backgroundColor: "tomato",
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
            marginStart.value = withSpring((windowWidth / 4) * index, {
              duration: 800,
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
              style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}
            >
              <FontAwesome
                name={IconNames[label]}
                size={20}
                color={isFocused ? "tomato" : "#222222"}
              />
              <Text
                style={{
                  color: isFocused ? "tomato" : "#222222",
                  marginTop: 4,
                }}
              >
                {titles[label]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default MyTabBar;
