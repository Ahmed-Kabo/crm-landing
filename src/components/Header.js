import BackGround from "../assets/bg.png";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HeaderImage from "../assets/header.svg";
const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <div className="flex">
            <div className="row flex-column justify-content-center align-items-center">
              <div className="col-lg-8 mb-4">
                <HeaderContent className="text-center">
                  <h2>Welcome to BoxBlyd Experience </h2>
                  <p>Connect With Your Customers More Effectively</p>
                </HeaderContent>
                <ButtonsStyled className="text-center">
                  <Button className="main">GET IT NOW</Button>
                  <Button className="secound">PLAY VIDEO</Button>
                </ButtonsStyled>
              </div>
              <div className="col-lg-9">
                <SvgImage>
                  <img src={HeaderImage} alt="header" />
                </SvgImage>
              </div>
            </div>
          </div>
        </Container>
      </HeaderStyled>
    </>
  );
};

const HeaderStyled = styled.header`
  background: url(${BackGround}) center center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const HeaderContent = styled.h2`
  color: var(--white);
  h2 {
    letter-spacing: 2px;
    font-size: 3.5rem;
    margin-bottom: 0.8rem;
    padding-top: 6rem;
    @media (max-width: 992px) {
      padding-top: 7rem;
      font-size: 2.7rem;
    }
  }
  p {
    font-size: 16px;
    color: #dadada;
    margin-bottom: 0.8rem;
  }
`;

const ButtonsStyled = styled.div`
  margin: 2rem 0;
  .main,
  .secound {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    margin-right: 2rem;
    background: var(--mainColor);
    color: var(--dark);
    border-color: var(--mainColor);
  }
  .secound {
    background: var(--secoundColor);
    color: var(--white);
    border-color: var(--secoundColor);
  }
`;

const SvgImage = styled.div`
  width: 100%;

  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Header;
