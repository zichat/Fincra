import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Dasboard from "./screens/Dasboard";
import TransferScreen from "./screens/TransferScreen";
import NotificationScreen from "./screens/NotificationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "./constants/COLORS";
import { SafeAreaView, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';


const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts Notloaded");
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar style="dark"/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home"
                : "home-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "notifications" : "notifications-outline";
            }else if (route.name === "Transfer") {
              iconName = focused ? "card" : "card-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.primaryNew,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { height: verticalScale(50), paddingBottom: 10, paddingTop:5, alignContent: 'center'},
        })}
      >
        <Tab.Screen name="Home" component={Dasboard} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Transfer" component={TransferScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

 
}
