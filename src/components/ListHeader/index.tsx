import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  title: string;
  subtitle: string;
};

const ListHeader = ({ title, subtitle }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default ListHeader;
