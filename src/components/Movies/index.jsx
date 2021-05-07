import React from 'react'
import styled from 'styled-components'

function Movies({ title, imgList }) {
	return (
		<Container>
			<h4>{title}</h4>
			<Content>
				{imgList
					? imgList.map((item) => (
							<Wrap>
								<img src={item} alt='video' />
							</Wrap>
					  ))
					: null}
			</Content>
		</Container>
	)
}

const Container = styled.div`
	padding: 20px 0;
`

const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
	cursor: pointer;
	border-radius: 7px;
	overflow: hidden;
	transition-duration: 200ms;
	box-shadow: rgba(0 0 0 / 69%) 0 26px 30px -10px,
		rgba(0 0 0 /73%) 0 16px 10px -10px;

	border: 3px solid rgba(249, 249, 249, 0.1);
	height: 130px;
	&:hover {
		border: 3px solid rgba(249, 249, 249, 0.8);
		transform: scale(1.05);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export default Movies
