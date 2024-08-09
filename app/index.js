import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const index = () => {
  const [bgColor, setBgColor] = useState("black");
  const [txtColor, setTxtColor] = useState("white");
  const [top, setTop] = useState(100);
  const [left, setLeft] = useState(10);
  const [font, setFont] = useState(20);
  const [count, setCount] = useState(0);

  const screenPress = () => {
    generateColor();
  };

  const generateColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
    setCount(count + 1);
    setTop(top + 30);
    setFont(font + 5);
    if (count >= 10) {
      setFont(font - 5);
    }
    if (count >= 20) {
      setTop(100);
      setFont(20);
      setCount(0);
      alert("Reach the maximum clicks ");
    }
  };

  return (
    <Pressable
      style={[styles.container, { backgroundColor: bgColor }]}
      onPress={() => screenPress()}
    >
      <Pressable style={{ position: "absolute", top: top }}>
        <Text style={[styles.helloTxt, { color: txtColor, fontSize: font }]}>
          {"Hello There"}
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  helloTxt: {
    color: "#111",
    fontSize: 20,
    fontWeight: "600",
  },
});
