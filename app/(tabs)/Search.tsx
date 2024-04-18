import { TextInput, View } from "react-native";
import React, { useEffect, useRef } from "react";
import SearchBar from "components/SearchBar";
import Container from "@UI/Container";
import { spacing } from "@UI/Theme";
import Tabs from "@UI/Tabs";

const Search = () => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <View>
      <Container style={{ margin: spacing.xl }}>
        <SearchBar forwardedRef={inputRef} />
        <Tabs
          titles={["Recent", "Saved"]}
          index={0}
          setTabIndex={(index: number) => {}}
        />
      </Container>
    </View>
  );
};

export default Search;
