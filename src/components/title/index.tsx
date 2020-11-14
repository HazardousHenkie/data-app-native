import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const TitleStyled = styled(Text)<{ color: string }>`
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.color};
`

const Title: React.FC = () => {
    return (
        <TitleStyled color="palevioletred">
            <Text>Expo with Styled Components</Text>
        </TitleStyled>
    )
}

export default Title
