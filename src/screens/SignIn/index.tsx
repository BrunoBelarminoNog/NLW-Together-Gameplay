import React from "react";
import { useState } from "react";
import { Text, View, Image } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";

import { styled } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styled.container}>
      <Image
        source={IllustrationImg}
        style={styled.image}
        resizeMode="stretch"
      />
      <View style={styled.content}>
        <Text style={styled.title}>
          Conecte-se {`\n`}e organize suas{`\n`}jogatinas
        </Text>
        <Text style={styled.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
}
