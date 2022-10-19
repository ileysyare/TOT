import React from "react";
import { View, Text, Touchable, StyleSheet } from "react-native";

const App=()=>{
    return(
        <View>

            
            <Text style={styles.txt1}>Hello APP</Text>
            <Text style={styles.txt1}>Hello APP</Text>
        </View>
    )
};
const styles=StyleSheet.create({
    txt:{color:'white,',fontSize:20,backgroundColor:'blue'},
    txt1:{color:'red',fontSize:20},

});
export default App;