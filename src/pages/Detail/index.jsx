import React from 'react'
import styled from 'styled-components'
import { images } from '../../constants/images'

function Detail() {
	return (
		<Container>
			<MovieLogo>
				<img
					alt=''
					src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'
				/>
			</MovieLogo>
			<Controls>
				<PlayButton>
					<img src={images.bplay} alt='play' />
					<span>Play</span>
				</PlayButton>
				<TrailerButton>
					<img src={images.wplay} alt='trailer' />
					<span>Trailer</span>
				</TrailerButton>
				{/* <AddButton></AddButton>
				<GroupWatchButton></GroupWatchButton> */}
			</Controls>
			<MovieInfo>2018 • 7m • Family, Fantasy, Kids, Animation</MovieInfo>
			<MovieDesc>
				A Chinese mom who’s sad when her grown son leaves home gets another
				chance at motherhood when one of her dumplings springs to life. But she
				finds that nothing stays cute and small forever.
			</MovieDesc>
		</Container>
	)
}

const MovieInfo = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 20px;
`
const MovieDesc = styled.div`
	line-height: 1.4;
	font-size: 20px;
	padding: 16px 0px;
	color: rgb(249, 249, 249);
	max-width: 874px;
`
const Controls = styled.div`
	display: flex;
	margin-top: 30px;
`
const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	font-size: 15px;
	text-transform: uppercase;
	height: 56px;
	border-radius: 4px;
	width: fit-content;
	margin-right: 10px;
	padding: 0 24px;
	letter-spacing: 1.8px;
	cursor: pointer;
	img {
		width: 32px;
	}
`
const PlayButton = styled(Button)`
	background-color: rgb(249, 249, 249) none repeat scroll 0% 0%;
`
const TrailerButton = styled(Button)`
	background-color: rgba(0, 0, 0, 0.3);
	color: white;
`

const AddButton = styled.button`
	background-image: url(${images.add});
`
const GroupWatchButton = styled.button``

const MovieLogo = styled.div`
	width: 35vw;
	height: 30vh;
	min-width: 200px;
	min-height: 170px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	&:before {
		content: '';
		background-image: url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		opacity: 0.8;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`

export default Detail
