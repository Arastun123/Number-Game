import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";


function Card({ children }) {
    return (

        <View style={styles.card}>
            {children}
        </View>
    )
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        marginTop: deviceWidth < 380 ? 12 : 24,
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
