import styled from "styled-components";
import QrLinks from "../../assets/Frame 719.svg";
import SocialIcons from "../../assets/Frame 741.svg";
import SendEmailInput from "../../assets/icon-send.svg";

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px 0;
`;

const FooterMainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const FooterTitle = styled.h2`
  color: white;
`;

const FooterText = styled.h3`
  color: white;
`;

const FooterSubText = styled.h4`
  color: white;
`;

const FooterSmallerText = styled.h5`
  color: white;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  background-color: black;
  border: 2px solid #fff;
  border-radius: 10px;
  width: 217px;
  height: 47px;
  color: white;
  padding: 0 40px 0 12px;
  position: relative;
`;

const SendIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  cursor: pointer;
`;

const DownloadWrapper = styled(FooterSection)`
  p {
    color: #5a5353;
  }
`;

const DownloadImage = styled.img`
  margin-bottom: 15px;
`;

const FooterHr = styled.hr`
  border: none;
  height: 2px;
  background: #5a5353;
  margin: 30px 0;
  width: 100%;
  border-radius: 8px;
`;

const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyrightText = styled.p`
  color: #5a5353;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterMainWrapper>
        <FooterSection>
          <FooterTitle>Exclusive</FooterTitle>
          <FooterText>Subscribe</FooterText>
          <FooterSmallerText>Get 10% off your first order</FooterSmallerText>
          <InputWrapper>
            <Input type="text" placeholder="Enter Your Email" />
            <SendIcon src={SendEmailInput} alt="Send" />
          </InputWrapper>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterSubText>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</FooterSubText>
          <FooterSubText>exclusive@gmail.com</FooterSubText>
          <FooterSubText>+88015-88888-9999</FooterSubText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Account</FooterTitle>
          <FooterSubText>My Account</FooterSubText>
          <FooterSubText>Login / Register</FooterSubText>
          <FooterSubText>Cart</FooterSubText>
          <FooterSubText>Wishlist</FooterSubText>
          <FooterSubText>Shop</FooterSubText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Link</FooterTitle>
          <FooterSubText>Privacy Policy</FooterSubText>
          <FooterSubText>Terms Of Use</FooterSubText>
          <FooterSubText>FAQ</FooterSubText>
          <FooterSubText>Contact</FooterSubText>
        </FooterSection>

        <DownloadWrapper>
          <FooterTitle>Download App</FooterTitle>
          <p>Save $3 with App New User Only</p>
          <DownloadImage src={QrLinks} alt="QR" />
          <DownloadImage src={SocialIcons} alt="Social Icons" />
        </DownloadWrapper>
      </FooterMainWrapper>

      <FooterHr />

      <FooterCopyright>
        <CopyrightText>Copyright Rimel 2022. All right reserved</CopyrightText>
      </FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
