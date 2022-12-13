import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import COLORS from "../../constants/COLORS";
import FONTS from "../../constants/FONTS";
import SIZES from "../../constants/SIZES";

const SingleCard = () => {
  const cards = [
    {
      id: 1,
      image: require("../../assets/images/visa.png"),
      name: "Visa",
      amount: "$1,020.92",
    },
  ];

  return cards.map((card) => (
    <View
      key={card.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: verticalScale(8),
        padding: moderateScale(12),
        backgroundColor: COLORS.greyNew,
        borderRadius: moderateScale(12),
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={card.image}
          alt={card.name}
          width={scale(65)}
          height={verticalScale(40)}
        />
        <View
          style={{
            marginHorizontal: moderateScale(16),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.latoBold,
              fontSize: moderateScale(SIZES.normalFontSize),
            }}
          >
            {card.amount}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.latoRegular,
              fontSize: moderateScale(SIZES.normalFontSize),
              color: COLORS.grey,
              marginVertical: verticalScale(4),
            }}
          >
            {card.name}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={{}}>
        <Ionicons
          name="chevron-forward-outline"
          color={COLORS.primaryNew}
          size={moderateScale(24)}
        />
      </TouchableOpacity>
    </View>
  ));
};

export default SingleCard;
