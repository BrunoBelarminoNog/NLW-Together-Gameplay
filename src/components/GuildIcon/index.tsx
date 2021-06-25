import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

const GuildIcon = () => {
  const uri =
    "http://rdes.com.br/wp-content/uploads/2016/09/rdes-csgo-icon.png";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};

export default GuildIcon;
