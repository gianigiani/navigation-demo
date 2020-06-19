import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';

import ContactsList from '../screens/ContactsList';
import ContactDetails from '../screens/ContactDetails';
import ActionsList from '../screens/ActionsList';
import ActionDetails from '../screens/ActionDetails';

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator
  screenOptions={{
    headerStyle: {backgroundColor: "white"}
  }}
  >
    <ContactsStack.Screen name="ContactsList" component={ContactsList} 
    options={{
      headerTitle: "Contacts"
    }} />
    <ContactsStack.Screen name="ContactDetails" component={ContactDetails} 
    options={({route}) => {
      return {
        headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
        headerStyle: {backgroundColor: "gray"}
      }
    }} />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

const AppTabs = createBottomTabNavigator()
const AppTabsScreen = () => (
  <AppTabs.Navigator
  // screenOptions={{
  //   tabBarLabel: "Test"
  // }}
  tabBarOptions={{
    activeTintColor: "red",
    activeBackgroundColor: "gray"
  }}
  >
    <AppTabs.Screen name="Contacts" component={ContactsStackScreen} options={{
      // tabBarLabel: "Contacts",
      tabBarIcon: (props) => <Ionicons name="ios-contacts" size={props.size} color={props.color} />
    }} />
    <AppTabs.Screen name="Actions" component={ActionsStackScreen} options={{
      tabBarIcon: (props) => <Ionicons name="ios-checkmark-circle-outline" size={props.size} color={props.color} />
    }}  />
  </AppTabs.Navigator>
)

export default () => (
  <NavigationContainer>
    <AppTabsScreen />
  </NavigationContainer>
);