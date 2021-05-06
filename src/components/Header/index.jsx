import React from 'react'
import styled from 'styled-components'
import { images } from '../../constants/images'
import Logo from '../Logo'
import Nav from './Nav'
import UserImg from './UserImg'

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
			<Nav />
			<UserImg src={images.userImage} />
		</Container>
	)
}

export default Header
