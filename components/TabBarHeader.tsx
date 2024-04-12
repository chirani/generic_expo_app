//(property) header?: ((props: BottomTabHeaderProps) => React.ReactNode)
import { View, Text, Image, Platform, StatusBar } from "react-native";
import React from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import Container from "@UI/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { spacing } from "@UI/Theme";
import HeaderIcon from "./HeaderIcon";

const TabBarHeader = (props: BottomTabHeaderProps) => {
  const insets = useSafeAreaInsets();
  const hasDynamicIsland = Platform.OS === "ios" && insets.top > 50;
  const statusBarHeight = hasDynamicIsland ? insets.top - 5 : insets.top;

  return (
    <>
      <>
        <StatusBar animated={false} hidden={false} />
        <View style={{ height: statusBarHeight }}></View>
      </>

      <Container
        style={{ padding: spacing.lg }}
        alignItems="center"
        flexDirection="row"
      >
        <Container
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          flex={1}
        >
          <Image
            style={{
              width: 64,
              height: 32,
            }}
            resizeMode="contain"
            source={require("../assets/text_logo.png")}
          />
          <HeaderIcon fontName="cart-shopping" />
        </Container>
      </Container>
    </>
  );
};

export default TabBarHeader;
