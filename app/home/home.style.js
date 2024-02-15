import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
   h2: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.secondary,
        paddingTop:SIZES.small,
        paddingBottom:SIZES.medium

      },
   fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
});

export default styles;
