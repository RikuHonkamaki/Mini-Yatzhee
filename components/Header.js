import React from "react";
import { Text, View } from "react-native";
import style from "../style/style";

export default function Header() {

    return (
        <View style = {style.header}>
            <Text style = {style.title}>
                Yatzhee
            </Text>
        </View>
    )
    
}