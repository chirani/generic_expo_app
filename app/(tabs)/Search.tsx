import { ScrollView, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SearchBar from "components/SearchBar";
import Container from "@UI/Container";
import { spacing } from "config/Theme";
import Tabs from "@UI/Tabs";
import TabItems from "@UI/TabItems";
import RecentSearches from "containers/RecentSearches";
import { useRecentSearchStore } from "zustand/Searches";

const Search = () => {
  const inputRef = useRef<TextInput>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const { addRecentSearch } = useRecentSearchStore();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <View>
      <Container style={{ margin: spacing.xl }}>
        <SearchBar
          forwardedRef={inputRef}
          value={searchInput}
          onChangeText={(text) => {
            setSearchInput(text);
          }}
          onSubmitEditing={() => {
            addRecentSearch(searchInput);
          }}
        />
      </Container>

      <Container style={{ marginHorizontal: spacing.xl }}>
        <Tabs
          titles={["Recent", "Saved"]}
          index={0}
          setTabIndex={(index: number) => {}}
        />
      </Container>

      <TabItems index={0}>
        <ScrollView>
          <RecentSearches
            onSetSearchInput={(value: string) => {
              setSearchInput(value);
            }}
          />
        </ScrollView>
        <></>
      </TabItems>
    </View>
  );
};

export default Search;
