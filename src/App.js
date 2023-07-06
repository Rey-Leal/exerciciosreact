import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './components/estilo'

import Primeiro from './components/Primeiro'
import { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'
import Contador from './components/Contador'
import PaiDireta from './components/direta/PaiDireta'
import PaiIndireta from './components/indireta/PaiIndireta'

export default () => (
    <SafeAreaView style={Estilo.app}>

        {/* Primeiro componente */}
        {/* <Primeiro/> */}
        
        {/* Multi componentes */}
        {/* <Comp1/> */}
        {/* <Comp2/> */}
        
        {/* Passagem de parametros */}
        {/* <MinMax min={3} max={20}/> */}
        
        {/* Gerando um numero aleatorio */}
        {/* <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/> */}

        {/* Uso de botao */}
        {/* <Botao/> */}

        {/* Atualizando state em tela */}
        {/* <Contador inicial={100} passo={13}/>
        <Contador/> */}
        
        {/* Comunicacao direta entre componentes - Pai/Filho/Neto */}
        {/* <PaiDireta/> */}
        
        {/* Comunicacao indireta entre componentes - Quando o filho passa informacao para o pai */}
        {/* <PaiIndireta/> */}

    </SafeAreaView>
)
