import {SafeAreaView, SectionList, View} from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Notification/Card";
import Item from "../components/Notification/Item";
import { cards } from "../constants/DATA";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";


const NotificationScreen = () => {
  return (
    
    <View style={{paddingHorizontal:moderateScale(15), marginBottom:verticalScale(100)}}>
      <Header text="Notification" />
      <SectionList
        sections={cards}
        renderItem={({ item }) => <Card card={item} />}
        renderSectionHeader={({ section: { day } }) => <Item title={day} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator= {false}
      />
    </View>
  );
};

export default NotificationScreen;
