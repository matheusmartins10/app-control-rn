import React, {useState} from 'react'

import styled from 'styled-components/native'

export default function Delivery() {

    const [name, setName] = useState('')
    const [equipment, setEquiment] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [job, setJob] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Container>
            <Title> Hello Delivery </Title>
        </Container>
    )
}

const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`

const Title = styled.Text`
   font-size: 32px;
   font-weight: bold;
   font-family: sans-serif;
`