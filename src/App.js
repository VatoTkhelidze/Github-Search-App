import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
import Header from './Header';
import SearchComponent from './SearchComponent';
import ProfileComponent from './ProfileComponent';

function App() {

  const [IsLight, setIsLight] = useState(true);
  const [name, setName] = useState('vatotkhelidze');
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <Container IsLight={IsLight}>
      <Header IsLight={IsLight} setIsLight={setIsLight} />
      <SearchComponent setUser={setUser} IsLight={IsLight} setIsLight={setIsLight} name={name} setName={setName} />
      { user && <ProfileComponent user={user} IsLight={IsLight} setIsLight={setIsLight} name={name} setName={setName} />}
    </Container>
  );
};


const Container = styled.div `
  min-height: 100vh;
  background-color: ${({IsLight})=>IsLight ? '#F6F8FF;' : '#141D2F;'};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 31px;
  padding-bottom: 79px;

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 98px;
    padding-top: 140px;
    padding-bottom: 236px;
  }

  @media (min-width: 1440px){
    padding-left: 355px;
    padding-right: 355px;
    padding-top: 144px;
    padding-bottom: 0;
  }
`

export default App;
