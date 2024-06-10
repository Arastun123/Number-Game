import { StyleSheet, Text, View } from "react-native";
import InstructionText from "../components/ui/InstructionText";

function GameOverScreen({userNumber}) {
    return (
        <View style={styles.container}>
            <InstructionText>Game Over!</InstructionText>
            <InstructionText>Your guess number is {userNumber}</InstructionText>
        </View>
    )
}


export default GameOverScreen;

const styles = StyleSheet.create({
    container:{
        marginTop: 100,
        padding: 10,
    }
})