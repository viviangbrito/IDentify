import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NewCaseScreen from './screens/NewCaseScreen';
import CasesScreen from './screens/CasesScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#e6ddd3',
          borderRadius: 20,
          height: 70,
          margin: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: '#002b4e',
        tabBarInactiveTintColor: '#002b4e',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Novo caso"
        component={NewCaseScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Casos"
        component={CasesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

