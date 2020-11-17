import React, {useState} from 'react'

import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import api from '../services/api'

export default function Order() {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [equipment, setEquiment] = useState('')
    const [sng, setSng] = useState('')

    const navigation = useNavigation()

    const handleCreateOrder = async () => {
        const data = {
            name,
            job,
            equipment,
            sng
        }

        await api.post('/order', data)

        navigation.goBack()

    }

    return (
        <Container>
        <Main>
           <Title> Solicitar o Pedido </Title>
        </Main>
        <Form>
        <Label> Digite seu nome: </Label>
        <Input placeholder="campo obrigatório*" value={name} onChangeText={setName} />
        <Label> Digite o job: </Label>
        <Input placeholder="campo obrigatório*" value={job} onChangeText={setJob} />
        <Label> Digite o equipamento: </Label>
        <Input placeholder="campo obrigatório*" value={equipment} onChangeText={setEquiment} />
        <Label> Digite o número do sng: </Label>
        <Input placeholder="campo obrigatório*" value={sng} onChangeText={setSng} />
        <Submit onPress={handleCreateOrder} >
            <ButtonText> Solicitar </ButtonText> 
        </Submit>
        </Form>
    </Container>
    )
    
}

const Container = styled.View`
   flex: 1;
   padding: 62px;
`

const Title = styled.Text`
   font-size: 32px;
   font-weight: bold;
   font-family: sans-serif;
`

const Main = styled.View`
   justify-content: center;
   align-items: center;
`

const Input = styled.TextInput`
 height: 60px;
 width: 300px;
 background-color: #fff;
 border-radius: 10px;
 align-items: center;
 padding: 20px;
 margin: 10px 0 30px auto;
`

const Form = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`

const Label = styled.Text`
   font-size: 18px;
   font-weight: bold;
   margin: 0 auto;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`

const Submit = styled.TouchableOpacity`
   height: 42;
   background-color: #f05a5b;
   justify-content:center;
   align-items: center;
   border-radius: 2px;
   width: 300px;
`