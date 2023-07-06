import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({min, max}) => {        
    const delta = max - min + 1
    const aleatorio = Math.floor(Math.random() * delta) + min
    return (
        <Fragment>
            <Text>Entre {min} e {max}</Text>
            <Text style={Estilo.titulo}>{aleatorio}</Text>
        </Fragment>
    )
}