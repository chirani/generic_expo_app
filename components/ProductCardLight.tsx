import { View, Image } from "react-native";
import React from "react";
import { spacing } from "config/Theme";
import { Text } from "@UI";
import { formatPrice, formatProductNameShort } from "../config/utils";

const ProductCardLight = ({
  productName,
  price,
  imageUri,
}: {
  imageUri: string;
  productName: string;
  price: number;
}) => {
  return (
    <View
      style={{ width: 160, marginBottom: spacing.sm, marginEnd: spacing.lg }}
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
    </View>
  );
};

export default ProductCardLight;
