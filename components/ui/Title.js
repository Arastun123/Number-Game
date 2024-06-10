import { Text, StyleSheet } from "react-native";


function Title({children}) {
    return <Text style={styles.title}> {children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 24,
        marginTop: 20,
    },
    title:{
        fontFamily: 'open-sans',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
    }
})