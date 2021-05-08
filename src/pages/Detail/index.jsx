import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import styled from "styled-components"
import { images } from "../../constants/images"
import db from "../../firebase"

function Detail() {
  const { id } = useParams()
  const [info, setInfo] = useState({})

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) setInfo(doc.data())
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <Container bg={info.backgroundImg}>
      <MovieLogo>
        <img alt='' src={info.titleImg} />
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
      </Controls>
      <MovieInfo>{info.subTitle}</MovieInfo>
      <MovieDesc>{info.description}</MovieDesc>
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
  transition-duration: 200ms;
  box-shadow: none;
  border: 2px solid rgba(249, 249, 249, 0.7);
  &:hover {
    opacity: 0.8;
  }
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
    content: "";
    background-image: url(${({ bg }) => bg});
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
