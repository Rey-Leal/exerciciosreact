import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    console.warn(props)
    return (
        <Text style={Estilo.titulo}>
            O valor {props.max}  é maior que {props.min}
        </Text>
    )
}