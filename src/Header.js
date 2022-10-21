import styled from 'styled-components'
import moonImg from './assets/icon-moon.svg';

function Header({IsLight, setIsLight}) {
  return (
    <HeaderDiv>
      <DevfinderTitle IsLight={IsLight}>devfinder</DevfinderTitle>
      <ThemeChangeDiv>
        <Button IsLight={IsLight} onClick={()=>setIsLight(!IsLight)}>DARK</Button>
        <img src={moonImg} alt="moon-icon"/>
      </ThemeChangeDiv>
    </HeaderDiv>
  );
}

const ThemeChangeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  /* background-color: ${(props)=>props.IsLight ? 'red' : 'green'}; */
  /* color: ${({IsLight})=>IsLight ? 'black' : 'white'}; */
  background-color: transparent;
  border: 0;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  color: #4B6A9B;
`

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DevfinderTitle = styled.span`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${({IsLight})=> IsLight ? '#222731' : '#FFFFFF'};
`



export default Header;