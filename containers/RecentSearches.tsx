import React from "react";
import Container from "@UI/Container";
import ListItem from "@UI/ListItem";
import { spacing } from "config/Theme";
import { useRecentSearchStore } from "zustand/Searches";

interface RecentSearchesProps {
  onSetSearchInput: (value: string) => void;
}

const RecentSearches = (props: RecentSearchesProps) => {
  const { recentSearches } = useRecentSearchStore();

  return (
    <Container style={{ gap: spacing.md, paddingHorizontal: spacing.xl }}>
      {recentSearches.map((item: string) => (
        <ListItem
          key={item}
          title={item}
          onPressOut={() => props.onSetSearchInput(item)}
        />
      ))}
    </Container>
  );
};

export default RecentSearches;
