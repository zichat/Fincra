import { View, Text } from 'react-native'
import React from 'react'
import ArrowDown from "../../assets/images/arrow_down.svg";
import ArrowUp from "../../assets/images/arrow_up.svg";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import COLORS from '../../constants/COLORS';
import SIZES from '../../constants/SIZES';


const Wallet = () => {
  return (
    <View
          style={{
            flexDirection: "row",
            backgroundColor: COLORS.primaryNew,
            marginVertical: verticalScale(24),
            paddingVertical: verticalScale(20),
            paddingHorizontal: scale(20),
            height: verticalScale(138),
            borderRadius: moderateScale(20),
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <ArrowDown width={moderateScale(48)} height={moderateScale(48)} />
            <Text
              style={{
                fontFamily: "Lato-Bold",
                color: COLORS.white,
                fontSize: scale(SIZES.meduimFontSize),
              }}
            >
              $ 2,090.20
            </Text>
            <Text
              style={{
                fontFamily: "Lato-Bold",
                color: COLORS.white,
                fontSize: scale(SIZES.normalFontSize),
              }}
            >
              Income
            </Text>
          </View>

          <View
            style={{
              height: "70%",
              alignSelf: "center",
              width: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: scale(15),
            }}
          ></View>

          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <ArrowUp width={moderateScale(48)} height={moderateScale(48)} />
            <Text
              style={{
                fontFamily: "Lato-Bold",
                color: COLORS.white,
                fontSize: scale(SIZES.meduimFontSize),
              }}
            >
              $ 1,090.20
            </Text>
            <Text
              style={{
                fontFamily: "Lato-Bold",
                color: COLORS.white,
                fontSize: scale(SIZES.normalFontSize),
              }}
            >
              Spending
            </Text>
          </View>
        </View>
  )
}

export default Wallet