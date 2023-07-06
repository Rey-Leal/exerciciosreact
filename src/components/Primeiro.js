import React from  'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default () => {
    console.warn('Depuração...')
    return (
        <Text style={Estilo.titulo}>
            Primeiro Componente
        </Text>
    )
}