import React from 'react'
import styled from 'styled-components'
import { images } from '../../constants/images'

function Login() {
	return <Container></Container>
}

const Container = styled.main`
	min-height: calc(100vh - 70px);
	background-image: url(${images.loginBg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

export default Login
