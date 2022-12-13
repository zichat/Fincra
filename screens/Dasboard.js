import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../constants/COLORS";
import SIZES from "../constants/SIZES";
import Wallet from "../components/Dasboard/Wallet";
import CardList from "../components/Dasboard/CardList";
import FONTS from "../constants/FONTS";

const Dasboard = () => {
  return (
    <View
      style={{
        marginTop: verticalScale(45),
        paddingHorizontal: scale(20),
        paddingVertical: moderateScale(5),
      }}
    >
      {/* TopMost Bar  */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: FONTS.latoRegular,
            fontSize: moderateScale(SIZES.normalFontSize),
          }}
        >
          Current Balance
        </Text>
        <TouchableOpacity>
          <Ionicons
            name="notifications"
            color={COLORS.primaryNew}
            size={moderateScale(24)}
          />
        </TouchableOpacity>
      </View>
      {/* TopMost Bar  */}

      {/* Current Balance */}
      <Text
        style={{
          fontFamily: "Lato-Bold",
          fontSize: moderateScale(SIZES.currentBalance),
        }}
      >
        $ 2,090.20
      </Text>
      {/* Current Balance */}

      {/* Wallet */}
      <Wallet />
      {/* Wallet */}

      {/* Your Card Text */}
      <View>
        <Text
          style={{
            fontFamily: "Lato-Regular",
            fontSize: moderateScale(SIZES.normalFontSize),
          }}
        >
          Your Cards
        </Text>
      </View>
      {/* Your cards */}

      {/* CardList */}
      <CardList />
      {/* CardList */}

      {/* Transactions Heading */}
      <View style={{flexDirection:'row', alignItems: "center", justifyContent: 'space-between', marginTop: verticalScale(24)}}>
        <Text style={{fontSize:moderateScale(SIZES.largeFontSize), fontFamily: FONTS.latoRegular}}>Transactions</Text>
        <Text style={{fontSize:moderateScale(SIZES.normalFontSize), fontFamily: FONTS.latoRegular}}>View all</Text>
      </View>

      <Text style={{fontSize:moderateScale(SIZES.smallFontSize), fontFamily: FONTS.latoRegular, color: COLORS.grey, marginTop: verticalScale(8)}}>Today</Text>

      {/* Transactions Heading */}
    </View>
  );
};

export default Dasboard;
