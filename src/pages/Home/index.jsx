import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/images/home-background.png'

function Home() {
	return <Container>Hello</Container>
}

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	&:before {
		content: '';
		background-image: url(${bg});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`

export default Home