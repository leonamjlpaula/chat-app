import React from 'react';
// import HomeSVG from '../assets/images/home.svg';
import HomeSVG from '@app/assets/images/home.svg';
import ChatsSVG from '@app/assets/images/messages.svg';
import NotificationsSVG from '@app/assets/images/notifications.svg';
import SpaceSVG from '@app/assets/images/space.svg';
import {
    HomeScreen,
    NewChat,
    NotificationsScreen,
    SpaceScreen,
} from '@app/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import ChatStackNavigator from './ChatStackNavigator';

const EmptyComponent = () => {
    return null;
};
const NewChatComponent = () => <NewChat />;

const Tab = createBottomTabNavigator();

type IconProps = {
    color: string;
};

const HomeIcon = ({ color }: IconProps) => <HomeSVG stroke={color} />;
const SpaceIcon = ({ color }: IconProps) => <SpaceSVG stroke={color} />;
const NotificationsIcon = ({ color }: IconProps) => (
    <NotificationsSVG stroke={color} />
);
const ChatsIcon = ({ color }: IconProps) => <ChatsSVG stroke={color} />;

export default function Tabnavigator() {
    const theme = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: theme.tabIcons.activeColor,
                tabBarInactiveTintColor: theme.tabIcons.inactiveColor,
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: HomeIcon,
                }}
            />
            <Tab.Screen
                name="SpaceScreen"
                component={SpaceScreen}
                options={{
                    tabBarIcon: SpaceIcon,
                }}
            />
            <Tab.Screen
                name="CreateChatModal"
                component={EmptyComponent}
                options={{ tabBarButton: NewChatComponent }}
            />
            <Tab.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{
                    tabBarIcon: NotificationsIcon,
                }}
            />
            <Tab.Screen
                name="Chats"
                component={ChatStackNavigator}
                options={{
                    tabBarIcon: ChatsIcon,
                }}
            />
        </Tab.Navigator>
    );
}
