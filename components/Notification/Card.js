import { View, Text, Image } from "react-native";
import React from "react";
import SIZES from "../../constants/SIZES";
import FONTS from "../../constants/FONTS";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import COLORS from "../../constants/COLORS";

const Card = ({card}) => {
  return (
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
          color: card.type === "spending" ? COLORS.red : COLORS.green,
        }}
      >
        {card.type === "spending" ? `- ${card.amount}` : `+ ${card.amount}`}
      </Text>
    </View>
  );
};

export default Card;
