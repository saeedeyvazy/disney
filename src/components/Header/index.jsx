import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { images } from "../../constants/images"
import { selectUser, login, logout } from "../../features/user/userSlice"
import Logo from "../Logo"
import Nav from "./Nav"
import UserImg from "./UserImg"
import { auth, provider } from "../../firebase"
import { useHistory } from "react-router"
function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        signIn()
      }
    })
  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      const { user } = result
      dispatch(
        login({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      )
      history.push("/")
    })
  }
  const signOut = () => {
    auth.signOut()
    dispatch(logout())
    history.push("/login")
  }

  return (
    <Container>
      <Logo src={images.logo} />
      {user ? (
        <>
          <Nav />
          <UserImg src={user.photo} onClick={signOut} />
        </>
      ) : (
        <LoginContainer>
          <LoginButton onClick={signIn}>Login</LoginButton>
        </LoginContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  background-color: #090101;
  height: 70px;
  display: flex;
  padding: 0 10px;
  align-items: center;
`

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const LoginButton = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: white;
  border: 1px solid rgba(249, 249, 249, 0.8);
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  transition-duration: 200ms;
  &:hover {
    opacity: 0.8;
    background-color: #f9f9f9;
    color: #040741;
    border-color: transparent;
  }
`

export default Header
