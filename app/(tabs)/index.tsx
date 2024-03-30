import { View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "components/SearchBar";
import { spacing } from "@UI/Colors";
import ProductCardLight from "components/ProductCardLight";
import { faker } from "@faker-js/faker";

const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: spacing.lg }}>
      <SearchBar />
      <View style={{ margin: spacing.md }} />
      <ScrollView horizontal>
        {[1, 1, 1].map((_item) => (
          <ProductCardLight
            key={faker.number.int()}
            imageUri={faker.image.urlLoremFlickr({ category: "product" })}
            productName={faker.commerce.productName()}
            price={faker.number.int({ min: 3_200, max: 140_000 })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Main;
