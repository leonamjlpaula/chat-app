import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import HomeSVG from '../assets/images/home.svg';
import ChatsSVG from '../assets/images/messages.svg';
import NotificationsSVG from '../assets/images/notifications.svg';
import SpaceSVG from '../assets/images/space.svg';
import { EmptyScreen } from '../screens/EmptyScreen';

const CreateChatComponent = () => {
    return null;
};

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
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: theme.tabIcons.activeColor,
                tabBarInactiveTintColor: theme.tabIcons.inactiveColor,
            }}>
            <Tab.Screen
                name="Home"
                component={EmptyScreen}
                options={{
                    tabBarIcon: HomeIcon,
                }}
            />
            <Tab.Screen
                name="Space"
                component={EmptyScreen}
                options={{
                    tabBarIcon: SpaceIcon,
                }}
            />
            <Tab.Screen
                name="CreateChatModal"
                component={CreateChatComponent}
            />
            <Tab.Screen
                name="Notifications"
                component={EmptyScreen}
                options={{
                    tabBarIcon: NotificationsIcon,
                }}
            />
            <Tab.Screen
                name="Chats"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ChatsIcon,
                }}
            />
        </Tab.Navigator>
    );
}
