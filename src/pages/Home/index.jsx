import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import ImgSlider from "../../components/ImgSlider"
import Movies from "../../components/Movies"
import Viewer from "../../components/Viewer"
import { images } from "../../constants/images"
import { setMovies } from "../../features/movie/movieSlice"
import db from "../../firebase"
function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let movies = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      dispatch(setMovies(movies))
    })
  }, [])

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Movies />
    </Container>
  )
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
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
