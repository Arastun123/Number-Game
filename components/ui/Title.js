import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Color.js";


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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
    }
})