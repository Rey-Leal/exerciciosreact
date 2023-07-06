import React, { useState } from 'react'
import { Text } from 'react-native'
import FilhoIndireta from './FilhoIndireta'
import Estilo from '../estilo'

export default props => {    
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('')

    function exibirValor(numero, texto){        
        setNum(numero)
        setTexto(texto)
    }

    return (        
        <>
            <Text style={Estilo.titulo} >{num}{texto}</Text>
            <FilhoIndireta 
                min={1} 
                max={60}
                exibir={exibirValor}
            />        
        </>
    )
}