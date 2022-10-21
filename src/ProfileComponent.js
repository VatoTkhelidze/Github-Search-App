import styled from 'styled-components';
import avatar from './assets/avatar.png';
// import location from './assets/icon-location.svg';

function ProfileComponent({IsLight, setIsLight}){
    return(
        <ProfileDiv IsLight={IsLight} setIsLight={setIsLight}>
            <UserContainer IsLight={IsLight} setIsLight={setIsLight}>
                <img src={avatar} alt='avatar-img'/> 
                <UserInfo IsLight={IsLight}>
                    <UsernameSpan IsLight={IsLight} setIsLight={setIsLight}>The Octocat</UsernameSpan>
                    <UsernameLink href='#'>@octocat</UsernameLink>
                    <UserJoinDate IsLight={IsLight} setIsLight={setIsLight}>Joined 25 Jan 2011</UserJoinDate>
                </UserInfo>
            </UserContainer>
            <UserBio IsLight={IsLight} setIsLight={setIsLight}>This profile has no bio.</UserBio>
            <UserStats IsLight={IsLight} setIsLight={setIsLight}>
                <StatsDiv IsLight={IsLight} setIsLight={setIsLight}>
                    <StatsSpan IsLight={IsLight} setIsLight={setIsLight}>Repos</StatsSpan>
                    <StatsNumbers IsLight={IsLight} setIsLight={setIsLight}>8</StatsNumbers>
                </StatsDiv>
                <StatsDiv>
                    <StatsSpan IsLight={IsLight} setIsLight={setIsLight}>Followers</StatsSpan>
                    <StatsNumbers IsLight={IsLight} setIsLight={setIsLight}>3938</StatsNumbers>
                </StatsDiv>
                <StatsDiv>
                    <StatsSpan IsLight={IsLight} setIsLight={setIsLight}>Following</StatsSpan>
                    <StatsNumbers IsLight={IsLight} setIsLight={setIsLight}>9</StatsNumbers>
                </StatsDiv>
            </UserStats>
            <UserData IsLight={IsLight} setIsLight={setIsLight}>
                <Data IsLight={IsLight} setIsLight={setIsLight}>
                    <DataSvgIcon IsLight={IsLight} setIsLight={setIsLight} height="20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"/></DataSvgIcon>
                    <Location href='https://goo.gl/maps/dsjbF6RFoRDQ4wzP9'>San Francisco</Location>
                </Data>
            </UserData>
        </ProfileDiv>
    )
}

const DataSvgIcon = styled.svg`
    fill: ${({IsLight})=> IsLight ? '#4b6a9b' : 'white'}
`
const Location = styled.a`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #4B6A9B;
    margin-left: 19.25px;
`

const Data = styled.div`
    display: flex;
`

const UserData = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`

const StatsNumbers = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: ${({IsLight})=> IsLight ? '#2B3442' : '#FFFFFF'};
    margin-top: 8px;
`

const StatsSpan = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    color: ${({IsLight})=>IsLight ? '#4B6A9B;' : '#FFFFFF;'};
`

const StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const UserStats = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-around;
    width: 100%;
    background: ${({IsLight})=> IsLight ? '#F6F8FF' : '#141D2F'};
    border-radius: 10px;
    padding-top: 18px;
    padding-bottom: 19px;
    margin-top: 23px;
`

const UserBio = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: ${({IsLight})=>IsLight ? '#697C9A' : '#FEFEFE'};
    mix-blend-mode: normal;
    opacity: ${({IsLight})=>IsLight ? '0.75' : '1'};
    margin-top: 33px;
`

const UserJoinDate = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${({IsLight})=>IsLight ? '#697C9A' : '#FEFEFE'};
`

const UsernameLink = styled.a`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #0079FF;
`

const UsernameSpan = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${({IsLight})=>IsLight ? '#1E2A47' : '#FEFEFE'};
`
    


const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 19px;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    background: ${({IsLight})=>IsLight ? '#FEFEFE' : '#1E2A47'};
`

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${({IsLight})=>IsLight ? '#FEFEFE' : '#1E2A47'};
    box-shadow: ${({IsLight})=>IsLight ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567);' : ''};
    border-radius: 15px;
    margin-top: 16px;
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 48px;
`

export default ProfileComponent