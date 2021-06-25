import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  urlImage: string;
};

const Avatar = ({ urlImage }: Props) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
};

export default Avatar;
