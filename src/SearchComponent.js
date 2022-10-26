import styled from 'styled-components';
import searchIcon from './assets/icon-search.svg';
import axios from 'axios';


function SearchComponent({IsLight, setIsLight, name, setName, setUser}){
    

    const fetchData = async() =>{
        try {
            const {data} = await axios.get(`https://api.github.com/users/${name}`);
            setUser(data);
        } catch (error) {
            
        };
    };
    const searchName = (event) =>{
        setName(event.target.value);
    };

    const enter = (event) =>{
        if(event.code === 'Enter'){
            fetchData();
        }
    }


    return(
        <SearchInputContainer IsLight={IsLight} setIsLight={setIsLight} name={name} setName={setName}>
            <img src={searchIcon} alt='search-icon'/>
            <SearchInput onKeyDown={enter} onChange={searchName} IsLight={IsLight} setIsLight={setIsLight} placeholder='Search GitHub username…'></SearchInput>
            <SearchButton onClick={fetchData} >Search</SearchButton>
        </SearchInputContainer>
    )
}


const SearchButton = styled.button`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    background: #0079FF;
    border-radius: 10px;
    padding-top: 12.5px;
    padding-bottom: 12.5px;
    padding-left: 18px;
    padding-right: 14px;
    border: 0;
    margin-right: 7px;
    cursor: pointer;
`

const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #FEFEFE;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    height: 60px;
    margin-top: 35px;
    padding-left: 16px;
    background: ${({IsLight})=>IsLight ? '#FEFEFE' : '#1E2A47'};
`

const SearchInput = styled.input`
    border: 0;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: ${({IsLight})=> IsLight ? '#4B6A9B' : '#FEFEFE'};
    width: 100%;
    padding: 0;
    margin-left: 8.9px;
    outline: none;
    background-color: ${({IsLight})=> IsLight ? '#FEFEFE' : '#1E2A47'};
    ::placeholder{
        color: ${({IsLight})=> IsLight ? '#4B6A9B' : '#FEFEFE'};
    }
`

export default SearchComponent