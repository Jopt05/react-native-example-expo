import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                // Añade color cuando está activo 
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e'
                },
                headerTintColor: '#fff',
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: '#25292e'
                }
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color} 
                            size={24}
                            />
                    )
                }} />
            <Tabs.Screen 
                name="about" options={{ 
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color} 
                            size={24}
                            />
                    )
                }} />
        </Tabs>
    )
};