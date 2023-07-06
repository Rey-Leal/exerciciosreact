import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <>
            <Text style={Estilo.titulo}>{props.a}</Text>
            <Text style={Estilo.titulo}>{props.b}</Text>
        </>
    )
}