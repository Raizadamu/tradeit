import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";
import CartScreen from "../screens/CartScreen";
import MyStore from "../screens/MyStore";
import { ListingContext } from "../auth/context"
import listingsApi from "../api/listings";


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextToken, setNextToken] = useState();
  const [loadingMore, setLoadingMore] = useState();
  const [error, setError] = useState();

  useNotifications();
  
  useEffect(() => {
    ready()
  }, []);
  
  const ready = async () => {
    setLoading(true)
    try {
      const listings = await listingsApi.getListings()
      setNextToken(listings.data.listListings.nextToken)
      setListings(listings.data.listListings.items)
      setError(false)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  const loadMore = async (nextToken) => {
    setLoadingMore(true)
    try {
      const newListings = await listingsApi.getListings(nextToken)
      setNextToken(newListings.data.listListings.nextToken)
      const lists = listings.concat(newListings.data.listListings.items)
      setListings(lists)
    } catch (error) {
      setError(true)
      console.log("error loading more", error);
    }
    setLoadingMore(false)
  }

  return (
    <ListingContext.Provider value={{
      error,
      loading,
      loadingMore,
      listings,
      nextToken,
      loadMore,
      refresh:ready,
      setListings
    }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={FeedNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Store"
          component={MyStore}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-appstore" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ListingEdit"
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewListingButton
                onPress={() => navigation.navigate(routes.LISTING_EDIT)}
              />
            ),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </ListingContext.Provider>
  );
};

export default AppNavigator;