import React from 'react'
import styled from 'styled-components'
import { images } from '../../constants/images'

const Container = styled.nav`
	display: flex;
	align-items: center;
	flex: 1;
	margin-left: 25px;
`

const MenuItem = styled.a`
	text-transform: uppercase;
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 0 12px;
	span {
		font-size: 13px;
		margin-left: 5px;
		position: relative;
		&:after {
			content: '';
			height: 2px;
			background-color: white;
			position: absolute;
			left: 0;
			opacity: 0;
			right: 0;
			bottom: -6px;
			transform: scaleX(0);
			transform-origin: right left;
			transition: all 300ms ease-in-out;
		}

		&:hover:after {
			transform: scaleX(1);
			opacity: 1;
		}
	}
`
const MenuItemImg = styled.img`
	height: 20px;
`

function Nav() {
	return (
		<Container>
			<MenuItem>
				<MenuItemImg src={images.homeIcon} />
				<span>home</span>
			</MenuItem>
			<MenuItem>
				<MenuItemImg src={images.searchIcon} />
				<span>search</span>
			</MenuItem>
			<MenuItem>
				<MenuItemImg src={images.watchIcon} />
				<span>watchlist</span>
			</MenuItem>
			<MenuItem>
				<MenuItemImg src={images.seriesIcon} />
				<span>series</span>
			</MenuItem>
			<MenuItem>
				<MenuItemImg src={images.movieIcon} />
				<span>movies</span>
			</MenuItem>
		</Container>
	)
}

export default Nav
