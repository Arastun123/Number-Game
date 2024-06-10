import { StyleSheet, View, Image, Text } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/Color";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <Text style={styles.summrayText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number 
                <Text style={styles.highlight}> {userNumber}</Text> .
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
        </View>
    )
}


export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 36,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        with: '100%',
        height: '100%'
    },
    summrayText: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
    }
})