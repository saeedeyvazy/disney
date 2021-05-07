import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../../components/ImgSlider'
import Movies from '../../components/Movies'
import Viewer from '../../components/Viewer'
import { images } from '../../constants/images'

function Home() {
	return (
		<Container>
			<ImgSlider />
			<Viewer />
			<Movies
				title='Recommended For You'
				imgList={[
					images.slider2,
					images.slider1,
					images.slider3,
					images.slider4,
				]}
			/>
		</Container>
	)
}

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;

	&:before {
		content: '';
		background-image: url(${images.homeBG});
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
