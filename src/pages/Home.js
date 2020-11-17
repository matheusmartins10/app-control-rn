import React from 'react'
import styled from 'styled-components/native' 
import { useNavigation } from '@react-navigation/native'

import { Linking } from 'react-native'

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

    const handleWhatsapp = () => {
       Linking.openURL(`whatsapp://send?phone=+5511991163398$&text=Oi%20tudo%20bem%20?`)
    }

    return (
        <Container>
            <Logo source={{uri: 'http://169.57.149.88/casanew/wp-content/uploads/2020/03/CBO_LATINCBO@2x.png'}}  />
            <Title> Olá, seja bem-vindo!</Title>
            <Whastapp onPress={handleWhatsapp} >
               <TextWhatsApp> Whastapp </TextWhatsApp>
            </Whastapp>
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
const Whastapp = styled.TouchableOpacity`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   background: #25d366;
   width: 300px;
   margin: 10px;
   border-radius: 10px;`

const TextWhatsApp = styled.Text`
   font-size: 18;
   color: #fff;
   margin: 10px auto;
`
