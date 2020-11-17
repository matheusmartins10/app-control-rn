import React from 'react'

import styled from 'styled-components/native' 
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation()

    function navigationToOrder(){
        navigation.navigate('Order')
    }

    return (
        <Container>
            <Title> Olá, seja bem-vindo!</Title>
            <NextOrder>
               <SubTitle onPress={() => navigationToOrder()} > Pedido de equipamento </SubTitle>
            </NextOrder>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-top: 100px;
`
const Title = styled.Text`
   font-size: 32px;
   font-weight: bold;
   font-family: sans-serif;
`

const SubTitle = styled.Text`
   font-size: 18;
`

const NextOrder = styled.TouchableOpacity``

