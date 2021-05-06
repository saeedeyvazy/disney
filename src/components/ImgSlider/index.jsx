import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'
import { images } from '../../constants/images'

function ImgSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}
	return (
		<Carousel {...settings}>
			<Wrap>
				<img src={images.slider1} alt='home' />
			</Wrap>
			<Wrap>
				<img src={images.slider2} alt='home' />
			</Wrap>
			<Wrap>
				<img src={images.slider3} alt='home' />
			</Wrap>
			<Wrap>
				<img src={images.slider4} alt='slider4' />
			</Wrap>
		</Carousel>
	)
}

const Carousel = styled(Slider)`
	margin-top: 20px;
	.slick-list {
		overflow: visible;
	}

	li button {
		&:before {
			color: rgb(150, 158, 171);
		}
	}

	li.slick-active button {
		&:before {
			color: white;
		}
	}
	button {
		z-index: 1;
	}
`

const Wrap = styled.div`
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border: 4px solid transparent;
		box-shadow: rgba(0 0 0 / 69%) 0 26px 30px -10px,
			rgba(0 0 0 /73%) 0 16px 10px -10px;
		transition: all 200ms ease-in-out;
		border-radius: 4px;
		&:hover {
			border: 2px solid rgba(249, 249, 249, 0.8);
		}
	}
`

export default ImgSlider
