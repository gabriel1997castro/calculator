import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#000',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        color: 'white',
    },
    operationButton: {
        color: 'blue',
        backgroundColor: '#444'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 2),
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
    result: {
        backgroundColor: '#46F',
        color: 'black',
    }
})


export default props => {
    const stylesButton = [styles.button];
    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) stylesButton.push(styles.operationButton);
    if (props.result) stylesButton.push(styles.result);
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}