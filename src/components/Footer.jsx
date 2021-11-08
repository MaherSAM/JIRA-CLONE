import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`display:flex;justify-content:center;align-items:center;height:2vw;${mobile({flexDirection:"Column"})}`;

const Footer = () => {
    return (
        <Container>
                Footer
        </Container>
    )
}

export default Footer
