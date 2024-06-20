import styled from "styled-components";

const Hero = () => {

    return(
        <HeroWrap></HeroWrap>
    )
}

export default Hero;

const HeroWrap = styled.section`
    height: calc(100vh - 60px);
    margin-top: -20px;
    border-radius: 20px 20px 0 0;
    background-color: whitesmoke;
    /* margin-top: -20px works in tandem with the HeaderWrap
       see Header.tsx and headerss.jpg in assets/images for clarification*/
`
