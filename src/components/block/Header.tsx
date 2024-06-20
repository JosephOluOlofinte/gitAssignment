import styled from "styled-components";

const Header = () => {

    return(

        <HeaderWrap1>
            <HeaderContain>
                <Logo>B</Logo> 
                <Navs>
                    <NavLink>Subjects</NavLink>
                    <NavLink>Pricing</NavLink>
                    <NavLink>About us</NavLink>
                    <NavLink>FAQ</NavLink>
                </Navs>
                <HeaderSignUp> Sign up</HeaderSignUp>
            </HeaderContain>
        </HeaderWrap1>
    )
}

export default Header;

const HeaderWrap1 = styled.section`
    height: 80px;
    width: 100%;
    background-color: #853EF4;
    display: flex;
    justify-content: center;
    align-items: top;
    /* this frame is responsible for the curved edges 
       the Hero section overlaps it with a margin of -20px 
       80px - 20px = 60px (the height of HeaderContain below)
       hero gets a height of 100vh - 60px. this initially causes a longer hero
       with a scrollbar
       the value margin: -20px then brings the hero back up, eliminating the scrollbar
       change the background color of HeaderWrap2 to differentiate them
       align-items: top prevents HeaderContain from overlapping the Hero */
`

    const HeaderContain = styled.section`
        height: 60px;
        width: 90%;
        background-color: #853EF4;
        /* background-color: black; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

        const Logo = styled.div`
            height: 45px;
            width: 45px;
            border-radius: 50%;
            background-color: whitesmoke;
            color: #853EF4;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            font-weight: 800;
            `
        
        const Navs = styled.nav`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            height: inherit;
            `

                const NavLink = styled.a`
                    color: whitesmoke;
                    font-weight: 500;
                    text-decoration: none; 
                    cursor: pointer;                   
                    `

        const HeaderSignUp = styled.button`
            background-color: whitesmoke;
            border-radius: 10px;
            border: 0;
            color: #853EF4;
            padding: 10px 20px;
        `