import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import FontAwesome from '@expo/vector-icons/FontAwesome6'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { useEffect } from 'react'
import { colors } from 'config/Theme'

const windowWidth = Dimensions.get('window').width

const MyTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const marginStart = useSharedValue(0)

  useEffect(() => {
    marginStart.value = withSpring((windowWidth / 4) * state.index, {
      duration: 800,
    })
  }, [state.index])

  const IconNames: any = {
    Inbox: 'inbox',
    index: 'house',
    MyProfile: 'user',
    Search: 'magnifying-glass',
  }

  const titles: any = {
    Inbox: 'Inbox',
    index: 'Home',
    MyProfile: 'Profile',
    Search: 'Search',
  }

  return (
    <>
      <View
        style={{
          height: 4,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}
      >
        <Animated.View
          style={{
            marginStart,
            height: 4,
            width: '25%',
            paddingHorizontal: 12,
          }}
        >
          <View
            style={{
              height: 4,
              flex: 1,
              backgroundColor: colors.primary,
              flexDirection: 'row',
            }}
          />
        </Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = route.name
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              // testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                alignItems: 'center',
                padding: 10,
                flex: 1,
              }}
            >
              <FontAwesome
                name={IconNames[label]}
                size={20}
                color={isFocused ? colors.primary : colors.text}
              />
              <Text
                style={{
                  color: isFocused ? colors.primary : colors.text,
                  marginTop: 4,
                }}
              >
                {titles[label]}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </>
  )
}

export default MyTabBar
