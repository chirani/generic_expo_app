import { ScrollView } from 'react-native'
import { Container, ListItem, Text } from '@UI'
import React, { useEffect } from 'react'
import { spacing } from 'config/Theme'
import { router } from 'expo-router'
import useAuthState from 'zustand/Auth'

const MyProfile = () => {
  const { isLogged, logOut } = useAuthState()

  return (
    <ScrollView contentContainerStyle={{ gap: spacing.md }}>
      <Text size="h3" style={{ marginBottom: spacing.lg, marginHorizontal: spacing.lg }}>
        My Profile
      </Text>
      <Container style={{ paddingHorizontal: spacing.md, gap: spacing.md }}>
        <ListItem title="Messages" onPressOut={() => router.navigate('/InBox')} />

        <ListItem title="Watchlist" onPressOut={() => router.navigate('../WatchList')} />

        <ListItem title="Saved" onPressOut={() => router.navigate('../Saved')} />

        <ListItem title="Purchased" onPressOut={() => router.navigate('../Purchased')} />

        <ListItem title="Bids & Offers" onPressOut={() => router.navigate('../Bids')} />
      </Container>
      <Text size="h3" style={{ marginBottom: spacing.xl, marginHorizontal: spacing.lg }}>
        Payment
      </Text>
      <Container style={{ paddingHorizontal: spacing.md, gap: spacing.md }}>
        <ListItem title="Satim" />
        {isLogged ? <ListItem title="Log out" onPress={() => logOut()} /> : <></>}
      </Container>
    </ScrollView>
  )
}

export default MyProfile
