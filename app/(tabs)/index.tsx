import { View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "components/SearchBar";
import { spacing } from "@UI/Colors";
import ProductCardLight from "components/ProductCardLight";
import { faker } from "@faker-js/faker";
import Container from "@UI/Container";
import Button from "@UI/Button";
import Text from "@UI/Text";
const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: spacing.lg }}>
      <SearchBar />

      <View style={{ margin: spacing.md }} />

      <Container style={{ margin: spacing.lg }}>
        <Text style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima?
        </Text>
      </Container>

      <Container
        style={{ gap: spacing.md, padding: spacing.md }}
        flexDirection="row"
      >
        <Container flex={1}>
          <Button title="Sign up" />
        </Container>
        <Container flex={1}>
          <Button title="Login" type="outline" />
        </Container>
      </Container>

      <View style={{ margin: spacing.md }} />

      <ScrollView horizontal>
        {[1, 1, 1, 1, 1].map((_item) => (
          <ProductCardLight
            key={faker.number.int()}
            imageUri={faker.image.urlLoremFlickr({ category: "android" })}
            productName={faker.commerce.productName()}
            price={faker.number.int({ min: 3_200, max: 140_000 })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Main;
