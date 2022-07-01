import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import { Estilo } from '../style/Estilo'

export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
            <View>
                <Text style={Estilo.estilo}>Número {numero}</Text>
                <Button style={Estilo.button} title='+' onPress={inc}></Button>
                <Button title='-' onPress={dec}></Button>
            </View>
        </>
    )
}