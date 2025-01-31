import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import classNames from "classnames";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_BAR_BOTTOM_POSITION = 8;
const TAB_BAR_HEIGHT = 66;

export const TAB_BAR_OFFSET = TAB_BAR_HEIGHT + TAB_BAR_BOTTOM_POSITION;

export default function TabLayout() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          marginTop: 8,
          alignSelf: "center",
          marginLeft: "auto",
          marginRight: "auto",
        },
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          position: "absolute",
          bottom: TAB_BAR_BOTTOM_POSITION + bottom,
          backgroundColor: "rgba(219, 244, 249, 0.5)",
          paddingBottom: 0,
          marginHorizontal: 16,
          borderRadius: 999,
          height: TAB_BAR_HEIGHT,
          borderWidth: 1,
          borderTopWidth: 1,
          borderTopColor: "black",
          borderColor: "black",
        },
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "transparent",
              borderRadius: 999,
              overflow: "hidden",
            }}
          />
        ),
        tabBarLabel: ({ focused, color, children }) => (
          <Text
            style={{ color }}
            className={classNames("mb-3", { "font-semibold": focused })}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dates"
        options={{
          title: "Dates",
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              name={focused ? "heart" : "heart-outlined"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
