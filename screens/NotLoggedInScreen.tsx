import { View } from "react-native";
import React from "react";
import { spacing } from "@UI/Theme";
import { Text, Button, Container } from "@UI";

const NotLoggedInScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        margin: spacing.xl,
        alignItems: "flex-start",
      }}
    >
      <Text size="h2" style={{ marginBottom: spacing.md }}>
        Lorem ipsum
      </Text>
      <Text style={{ marginBottom: "auto" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        voluptatibus. Inventore, commodi!
      </Text>
      <Container style={{ alignSelf: "stretch", gap: spacing.lg }}>
        <Button title="Log In" size="lg" />

        <Button title="Sign Up" type="outline" size="lg" />
      </Container>
    </View>
  );
};

export default NotLoggedInScreen;
