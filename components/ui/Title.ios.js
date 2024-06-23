import { Text, StyleSheet } from "react-native";


function Title({children}) {
    return <Text style={styles.title}> {children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    
    title:{
        fontFamily: 'open-sans',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'ios' ? 2 : 0,
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
        maxWidth : '80%',
        width: 300  
    }
})