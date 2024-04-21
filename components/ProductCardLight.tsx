import {
  View,
  Image,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { spacing } from "config/Theme";
import { Text } from "@UI";
import { formatPrice, formatProductNameShort } from "../config/utils";

interface ProductCardLightProps extends PressableProps {
  imageUri: string;
  productName: string;
  price: number;
  style?: StyleProp<ViewStyle>;
}

const ProductCardLight = (props: ProductCardLightProps) => {
  const { productName, price, imageUri, style } = props;

  return (
    <Pressable
      {...props}
      style={[
        {
          width: 160,
          marginBottom: spacing.sm,
          marginEnd: spacing.lg,
        },
        style,
      ]}
    >
      <View
        style={{
          aspectRatio: 1,
          overflow: "hidden",
          backgroundColor: "white",
          borderRadius: spacing.md,
        }}
      >
        <Image
          source={{ uri: imageUri }}
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <View style={{ marginBottom: spacing.xs }} />
      <Text style={{ flexShrink: 1 }}>
        {formatProductNameShort(productName)}
      </Text>
      <Text size="h3" style={{ flexShrink: 1 }}>
        {formatPrice(price)}
      </Text>
    </Pressable>
  );
};

export default ProductCardLight;
