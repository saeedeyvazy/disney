import React from 'react'
import styled from 'styled-components'
import { images } from '../../constants/images'

function Login() {
	return (
		<Container>
			<TopWrapper>
				<img src={images.ctaLogoOne} alt='cta-one' />
				<Button>Get All There</Button>
				<p>
					Get Premier Access to Raya and the Last Dragon for an additional fee
					with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
					The Disney Bundle will increase by $1.
				</p>
				<img src={images.ctaLogoTwo} alt='cta-two' />
			</TopWrapper>
		</Container>
	)
}

const Button = styled.button`
	width: 100%;
	height: 60px;
	font-size: 18px;
	font-weight: 900;
	color: white;
	cursor: pointer;
	background-color: rgb(0, 99, 229);
	border-radius: 4px;
	border: none;
	text-transform: uppercase;
	letter-spacing: 1.5px;

	&:hover {
		background-color: rgb(4, 131, 238);
	}
`

const TopWrapper = styled.div`
	padding: 0 20px;
	max-width: 650px;
	img {
		width: 100%;
	}
	p {
		color: rgb(243, 243, 243);
		font-size: 11px;
		margin: 0px 0px 24px;
		line-height: 1.5;
		letter-spacing: 1.5px;
		margin-top: 10px;
	}
`

const Container = styled.main`
	min-height: calc(100vh - 70px);
	background-image: url(${images.loginBg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default Login
