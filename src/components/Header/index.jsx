import React from 'react'
import styled from 'styled-components'
import { images } from '../../constants/images'
import Logo from '../Logo'

const Container = styled.div`
	background-color: #090101;
	height: 70px;
	display: flex;
	align-items: center;
`

function Header() {
	return (
		<Container>
			<Logo src={images.logo} />
		</Container>
	)
}

export default Header
