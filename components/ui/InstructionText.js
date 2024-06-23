import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, style}) {
    return (
        <View>
            <Text style={[styles.text, style]}>{children}</Text>
        </View>
    )
};

export default InstructionText;
const styles = StyleSheet.create({
    text:{
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})