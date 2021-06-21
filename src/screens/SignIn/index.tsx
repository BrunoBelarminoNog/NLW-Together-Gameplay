import React from "react";
import { useState } from "react";
import { Text, View, Image, StatusBar } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";

import { styled } from "./styles";
import IllustrationImg from "../../assets/illustration.png";

export default function SignIn() {
  const [text, setText] = useState("");

  return (
    <View style={styled.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styled.image}
        resizeMode="stretch"
      />
      <View style={styled.content}>
        <Text style={styled.title}>
          Organize {`\n`} suas jogatinas {`\n`}facilmente
        </Text>
        <Text style={styled.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}