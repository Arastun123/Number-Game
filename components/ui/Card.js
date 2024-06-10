import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Color";


function Card({ children }) {
    return (

        <View style={styles.card}>
            {children}
        </View>
    )
};

export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        marginTop: 20,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        // for android
        elevation: 4,
        // for IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .25,
    }
})
