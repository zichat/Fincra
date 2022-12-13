import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../constants/COLORS";
import SIZES from "../constants/SIZES";
import FONTS from "../constants/FONTS";
import SingleCard from "../components/Transfer/SingleCard";
import ChooseTransactionList from "../components/Transfer/ChooseTransactionList";
import SelectReciepientList from "../components/Transfer/SelectReciepientList";
import PrimaryButton from "../components/Button/PrimaryButton";

const TransferScreen = () => {
  return (
    <View
      style={{
        marginTop: verticalScale(45),
        paddingHorizontal: scale(20),
        paddingVertical: moderateScale(5),
      }}
    >
      {/* Heading start */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back-outline"
            color={COLORS.primaryNew}
            size={moderateScale(24)}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: moderateScale(SIZES.xLargeFontSize),
            fontFamily: FONTS.latoRegular,
            marginHorizontal: moderateScale(4),
          }}
        >
          Transfer
        </Text>
      </View>
      {/* Heading End */}

      {/* Choose account / card start */}
      <Text
        style={{
          fontFamily: FONTS.latoRegular,
          fontSize: moderateScale(SIZES.normalFontSize),
          marginTop: verticalScale(32),
          marginBottom: verticalScale(8),
        }}
      >
        Choose account / card start
      </Text>

      <SingleCard />
      {/* Choose account / card end */}

      {/* Choose transaction start */}
      <Text
        style={{
          fontFamily: FONTS.latoRegular,
          fontSize: moderateScale(SIZES.normalFontSize),
          marginTop: verticalScale(32),
          paddingHorizontal: moderateScale(5),
          marginBottom: verticalScale(8),
        }}
      >
        Choose transaction
      </Text>

      <ChooseTransactionList />
      {/* Choose transaction end */}

      {/* Horizontal Line start*/}
      <View
        style={{
          height: 1,
          backgroundColor: COLORS.greyNew2,
          marginVertical: verticalScale(28),
        }}
      />
      {/* Horizontal Line  end*/}

      {/* Select Recipient */}
      <Text
        style={{
          fontFamily: FONTS.latoRegular,
          fontSize: moderateScale(SIZES.normalFontSize),
          paddingHorizontal: moderateScale(5),
          marginBottom: verticalScale(16),
        }}
      >
        Select Recipient
      </Text>

      <SelectReciepientList />

      {/* select  Reciepient End */}

      {/* Next Button */}
      <PrimaryButton text="Next"/>
      {/* Next Button */}
    </View>
  );
};

export default TransferScreen;
