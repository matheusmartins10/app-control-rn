import React, {useState} from 'react'

import styled from 'styled-components/native'

export default function Equipment() {

    const [model, setModel] = useState('')
    const [sng, setSng] = useState('')
    const [lastJob, setLastJob] = useState('')
    const [defect, setDefect] = useState('')

    return (
        <Container>
            <Title> Hello Equipment </Title>
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
