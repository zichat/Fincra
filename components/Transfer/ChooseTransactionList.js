import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import COLORS from "../../constants/COLORS";
import FONTS from "../../constants/FONTS";
import SIZES from "../../constants/SIZES";
import Ionicons from "@expo/vector-icons/Ionicons";

const cards = [
  {
    id: 1,
    icon: "people-outline",
    action: "Transfer to your Contact",
  },
  {
    id: 2,
    icon: "card-outline",
    action: "Transfer to Card Number",
  },
  {
    id: 3,
    icon: "globe-outline",
    action: "Transfer to customer",
  },
];

const ChooseTransactionList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={{
            height: verticalScale(147),
            width: moderateScale(148),
            backgroundColor: COLORS.greyNew,
            marginRight: moderateScale(12),
            paddingVertical: verticalScale(20),
            paddingHorizontal: moderateScale(12),
            justifyContent: "space-between",
            borderRadius: moderateScale(12),
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.white,
              width: moderateScale(45),
              height: moderateScale(45),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <View>
              <Ionicons
                name={card.icon}
                color={COLORS.primaryNew}
                size={moderateScale(32)}
              />
            </View>
          </View>

          <Text
            style={{
              fontFamily: FONTS.latoRegular,
              fontSize: moderateScale(SIZES.normalFontSize),
            }}
          >
            {card.action}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ChooseTransactionList;
