import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options';
import Colors from './utility/Colors';

// Function to get icons for Drawer navigation
const getDrawerItemIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);

const Stack = createNativeStackNavigator();

// Contacts Stack Screen
const ContactsScreens = () => (
  <Stack.Navigator
    initialRouteName="Contact"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Contact" component={Contact} options={{ title: "Contact" }} />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ route }) => {
        const { contact } = route.params;
        const { name } = contact;
        return {
          title: name.split(' ')[0],
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Colors.blue,
          },
        };
      }}
    />
  </Stack.Navigator>
);

// Favorites Stack Screen
const FavoritesScreens = () => (
  <Stack.Navigator initialRouteName="Favorites">
    <Stack.Screen name="Favorites" component={Favorites} options={{ title: "Favorites" }} />
    <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
  </Stack.Navigator>
);

// User Stack Screen
const UserScreens = ({ navigation }) => (
  <Stack.Navigator initialRouteName="User">
    <Stack.Screen
      name="User"
      component={User}
      options={{
        headerTitle: "Me",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerRight: () => (
          <MaterialIcons
            name="settings"
            size={24}
            style={{ color: 'white', marginRight: 10 }}
            onPress={() => navigation.navigate('Options')}
          />
        ),
      }}
    />
    <Stack.Screen name="Options" component={Options} options={{ title: "Options" }} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Contacts"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Contacts') {
          iconName = 'list';
        } else if (route.name === 'Favorites') {
          iconName = 'star';
        } else if (route.name === 'User') {
          iconName = 'person';
        }
        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Contacts" component={ContactsScreens} />
    <Tab.Screen name="Favorites" component={FavoritesScreens} />
    <Tab.Screen name="User" component={UserScreens} />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="TabNavigator">
    <Drawer.Screen
      name="TabNavigator"
      component={TabNavigator}  
      options={{
        drawerIcon: getDrawerItemIcon('home'),
      }}
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
