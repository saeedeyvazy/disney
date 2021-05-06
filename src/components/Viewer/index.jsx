import React from 'react'
import styled from 'styled-components'
import { images } from '../../constants/images'

function Viewer() {
	return (
		<Container>
			<Item img={images.view1} />
			<Item img={images.view4} />
			<Item img={images.view2} />
			<Item img={images.view5} />
			<Item img={images.view3} />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	margin-top: 40px;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`

const Item = styled.div`
	cursor: pointer;
	margin: 5px 0;
	border: 2px solid rgba(249, 249, 249, 0.1);
	border-radius: 7px;
	width: 150px;
	height: 80px;
	background-color: transparent;
	background-image: url(${({ img }) => img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition-duration: 500ms;
	&:hover {
		border: 2px solid rgba(249, 249, 249, 0.5);
	}
`

export default Viewer
