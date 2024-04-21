import { View, ScrollView } from "react-native";
import React from "react";
import { spacing } from "config/Theme";
import ProductCardLight from "components/ProductCardLight";
import { faker } from "@faker-js/faker";
import Container from "@UI/Container";
import Button from "@UI/Button";
import Text from "@UI/Text";
import Card from "@UI/Card";
import { Link, router } from "expo-router";

const Main = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Link
        href="/Search"
        style={{
          borderWidth: 2,
          margin: spacing.xl,
          paddingVertical: 10,
          paddingHorizontal: 25,
          borderRadius: 100,
          backgroundColor: "#efefef30",
        }}
      >
        <Text style={{ textAlign: "center" }}>Search Products, Sellers...</Text>
      </Link>

      <View style={{ margin: spacing.md }} />
      <Container style={{ margin: spacing.xl }}>
        <Text style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima?
        </Text>
      </Container>
      <Container
        style={{ gap: spacing.md, padding: spacing.lg }}
        flexDirection="row"
      >
        <Container flex={1}>
          <Button title="Sign up" rounded />
        </Container>
        <Container flex={1}>
          <Button title="Login" type="outline" rounded />
        </Container>
      </Container>
      <View style={{ margin: spacing.md }} />
      <ScrollView horizontal style={{ padding: spacing.lg }}>
        {[1, 1, 1, 1, 1].map((_item) => (
          <ProductCardLight
            onPress={() => router.navigate("/ProductPage")}
            key={faker.number.int()}
            imageUri={faker.image.urlLoremFlickr({ category: "android" })}
            productName={faker.lorem.words({ min: 4, max: 10 })}
            price={faker.number.int({ min: 3_200, max: 140_000 })}
          />
        ))}
      </ScrollView>
      <Card style={{ margin: spacing.lg }}>
        <Text size="h3">Need new outfits</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quia voluptates nemo.
        </Text>
        <Container style={{ marginTop: spacing.lg }} alignItems="flex-end">
          <Button title="Browse Our Sportsware" rounded type="outline" />
        </Container>
      </Card>
    </ScrollView>
  );
};

export default Main;
