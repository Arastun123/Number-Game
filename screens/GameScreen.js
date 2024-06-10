import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRnadomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRnadomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRnadomBetween(minBoundry, maxBoundry, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You knnow that is wrog...', [{ text: 'Sorry!', style: 'cancel' },])
            return;
        }

        if (direction === 'lower') maxBoundry = currentGuess
        else minBoundry = currentGuess + 1;
        const newRandomNumber = generateRnadomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Oppenents Guess </Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higer or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
            {/* <View>
                Log Rounds
            </View> */}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 20,
    }
})