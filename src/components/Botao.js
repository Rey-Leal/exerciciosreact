import React, { Fragment } from 'react'
import { Text, Button, Alert } from 'react-native'
import Estilo from './estilo'

export default props => {

    function exibirAlerta() {        
        Alert.alert('Alerta')
    }

    function exibirWarn() {
        console.warn('Warn')
    }

    return (        
        <Fragment>
            <Button title='Executar 1' onPress={exibirAlerta} />            
            <Button title='Executar 2' onPress={exibirWarn} />
        </Fragment>
    )
}
