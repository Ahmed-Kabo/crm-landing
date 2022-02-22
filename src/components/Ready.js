import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import ReadyBG from "../assets/bg1.png";

const Ready = () => {
  return (
    <ReadyToShow>
      <Container>
        <div className="readyToShow__content">
          <h2>Ready to Get Started</h2>
          <p>
            Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
            tincidunt maximus. Pellentesque tempus gravida viverra.
          </p>
          <Button className="secound-btn">GET IT NOW</Button>
        </div>
      </Container>
    </ReadyToShow>
  );
};

const ReadyToShow = styled.section`
  background: url(${ReadyBG}) center center no-repeat;
  background-size: cover;
  height: 630px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin-top: -4rem;
    padding: 0 0 1rem;
    color: var(--white);
    font-size: 2.5rem;
    @media (max-width: 992px) {
      font-size: 2rem;
    }
  }
  p {
    color: var(--white);
    width: 50%;
    margin: 1rem auto 2rem auto;
    @media (max-width: 992px) {
      font-size: 0.8rem;
      width: 90%;
    }
  }
  .secound-btn {
    background: var(--mainColor);
    border-color: var(--mainColor);
    color: var(--dark);
    width: 160px;
    height: 50px;
    border-radius: 0.5rem;
    letter-spacing: 1.5px;
    transition: all 0.3s;
    &:hover {
      background: var(--secoundColor);
      border-color: var(--secoundColor);
      color: var(--white);
      box-shadow: 0 10px 30px rgba(var(--mainColor), 10%);
    }
  }
`;

export default Ready;
