import styled from "styled-components";

const Footer = () =>{

    return(

        <FooterWrap>
            <FooterCont>

            <FooterBox>
                <FooterHead>CUSTOMER SERVICE</FooterHead>
                <FooterLink>
                    <a href="#">Help & Contact Us</a>
                    <a href="#">Returns & Refunds</a>
                    <a href="#">Online Stores</a>
                    <a href="#">Terms & Conditions</a>
                </FooterLink>
            </FooterBox>

            <FooterBox>
            <FooterHead>COMPANY</FooterHead>
            <FooterLink>
            <a href="#">What We Do</a>
            <a href="#">Available Services</a>
            <a href="#">Latest Posts</a>
            <a href="#">FAQs</a>
            </FooterLink>
            </FooterBox>
            
            <FooterBox>
            <FooterHead>SOCIAL MEDIA</FooterHead>
            <FooterLink>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
            </FooterLink>
            </FooterBox>

            <FooterBox>
            <FooterHead>PROFILE</FooterHead>
            <FooterLink>
            <a href="#">My Account</a>
            <a href="#">Checkout</a>
            <a href="#">Order Tracking</a>
            <a href="#">Help & Support</a>
            </FooterLink>
            </FooterBox>

            </FooterCont>
        </FooterWrap>
    )
}

export default Footer;

const FooterWrap = styled.section`
    width: 100%;
    height: 100%;
    padding-top: 15vh;
    display: flex;
    justify-content: center;
    background-color: #020000dc;
`

const FooterCont = styled.section`
    width: 90%;
    display: flex;
    justify-content: space-around;
`

const FooterBox = styled.div`
    margin-bottom: 10vh;
`

const FooterHead = styled.h3`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 25px;
    color: whitesmoke;
`

const FooterLink = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

a {
    color: #B2B2B2;
    font-weight: 300;
    font-size: 14px;
    }

:hover {
    color: #000000;
}
`