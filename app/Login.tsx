import React, { useEffect } from "react";
import useAuthState from "zustand/Auth";
import { Button, Container, Text } from "@UI";
import { spacing } from "config/Theme";
import { router } from "expo-router";

const Login = () => {
  const { logIn, isLogged } = useAuthState();

  useEffect(() => {
    if (isLogged) {
      router.back();
    }
  }, [isLogged]);

  return (
    <Container
      flex={1}
      style={{ margin: spacing.lg, marginBottom: spacing.xl * 2 }}
    >
      <Text size="h2" style={{ marginBottom: spacing.md }}>
        Hello Login
      </Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, culpa?
      </Text>
      <Container style={{ marginTop: "auto" }}>
        <Button title="Login" size="lg" onPress={() => logIn()} />
      </Container>
    </Container>
  );
};

export default Login;
