import React from "react";
import { View, Text } from "react-native";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

const Category = ({ title, icon: Icon, checked, ...rest }: Props) => {
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}></View>
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
};

export default Category;
