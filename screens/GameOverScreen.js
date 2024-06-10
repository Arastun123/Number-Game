import { StyleSheet, Text, View } from "react-native";

function GameOverScreen({userNumber}) {
    return (
        <View style={styles.container}>
            <Text>Game Over!</Text>
            <Text>Your guess number is {userNumber}</Text>
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