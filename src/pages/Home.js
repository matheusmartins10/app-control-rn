import React from 'react'



import styled from 'styled-components/native' 
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation()

    function navigationToOrder(){
        navigation.navigate('Order')
    }

    function navigationToDelivery(){
        navigation.navigate('Delivery')
    }

    function navigationToEquipment(){
       navigation.navigate('Equipment')
    }

    return (
        <Container>
            <Logo source={{uri: 'http://169.57.149.88/casanew/wp-content/uploads/2020/03/CBO_LATINCBO@2x.png'}}  />
            <Title> Olá, seja bem-vindo!</Title>
            <NextOrder>
               <SubTitle onPress={() => navigationToOrder()} > Pedido de equipamento </SubTitle>
            </NextOrder>
            <NextOrder>
               <SubTitle onPress={() => navigationToDelivery()} > Entrega de equipamento </SubTitle>
            </NextOrder>
            <NextOrder>
               <SubTitle onPress={() => navigationToEquipment()} > Equipamento com defeito </SubTitle>
            </NextOrder>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-top: 160px;
`

const Logo = styled.Image`
   width: 150px;
   height: 60px;
`

const Title = styled.Text`
   font-size: 28px;
   font-weight: bold;
   margin: 60px;
`

const SubTitle = styled.Text`
   font-size: 18;
   color: #fff;
   margin: 10px auto;
`

const NextOrder = styled.TouchableOpacity`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   background: red;
   width: 300px;
   margin: 10px;
   border-radius: 10px;
`

