import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
import Header from './Header';
import SearchComponent from './SearchComponent';
import ProfileComponent from './ProfileComponent';

function App() {

  const [IsLight, setIsLight] = useState(true);

  return (
    <Container IsLight={IsLight}>
      <Header IsLight={IsLight} setIsLight={setIsLight} />
      <SearchComponent IsLight={IsLight} setIsLight={setIsLight} />
      <ProfileComponent IsLight={IsLight} setIsLight={setIsLight} />
    </Container>
  );
}


const Container = styled.div `
  min-height: 100vh;
  background-color: ${({IsLight})=>IsLight ? '#F6F8FF;' : '#141D2F;'}
  padding-left 24px;
  padding-right: 24px;
  padding-top: 31px;
`

export default App;
