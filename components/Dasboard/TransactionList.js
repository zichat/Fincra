import { View, Text, Image } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import COLORS from "../../constants/COLORS";
import FONTS from "../../constants/FONTS";
import SIZES from "../../constants/SIZES";

const TransactionList = () => {
  const cards = [
    {
      id: 1,
      image: require("../../assets/images/shopping.png"),
      name: "Spending",
      amount: "$535.92",
      date: "20 may 12:20",
      type: "income",
    },
    {
      id: 2,
      image: require("../../assets/images/jane_loren.png"),
      name: "Jane Loren",
      amount: "$890.30",
      date: "20 may 11:30",
      type: "spending",
    },
    {
      id: 3,
      image: require("../../assets/images/mark_john.png"),
      name: "Mark John",
      amount: "$1,890.30",
      date: "25 June 11:30",
      type: "spending",
    },
  ];
  return cards.map((card) => (
    <View
      key={card.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: verticalScale(16),
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={card.image}
          alt={card.name}
          width={scale(48)}
          height={verticalScale(48)}
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
            {card.name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.latoRegular,
              fontSize: moderateScale(SIZES.smallFontSize),
              color: COLORS.grey,
              marginVertical: moderateScale(6),
            }}
          >
            {card.date}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: SIZES.meduimFontSize,
          fontFamily: FONTS.latoRegular,
          color: (card.type === 'spending') ? COLORS.red : COLORS.green,
        }}
      >
        {(card.type === 'spending') ? `- ${card.amount}` : `+ ${card.amount}`}
      </Text>
    </View>
  ));
};

export default TransactionList;
