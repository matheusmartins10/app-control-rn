import React, {useState} from 'react'

import styled from 'styled-components/native'

export default function Order() {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [equipment, setEquiment] = useState('')
    const [sng, setSng] = useState('')

    return (
        <Container>
            <Title> Hello Order </Title>
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

