import styled from "styled-components";

const Header = () => {

    return(

        <HeaderWrap1>
            <HeaderWrap2></HeaderWrap2>
        </HeaderWrap1>
    )
}

export default Header;

const HeaderWrap1 = styled.section`
    height: 80px;
    width: 100%;
    background-color: #853EF4;
    /* this frame is responsible for the curved edges 
       the Hero section overlaps it with a margin of -20px 
       80px - 20px = 60px (the height of the actual header below)
       hero gets a height of 100vh - 60px. this initially causes a longer hero
       with a scrollbar
       the value margin: -20px then brings the hero back up, eliminating the scrollbar
       change the background color of HeaderWrap2 to differentiate them */
`

    const HeaderWrap2 = styled.section`
        height: 60px;
        width: 100%;
        background-color: #853EF4;
    `
