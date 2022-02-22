import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import bgMassage from "../assets/bg3.png";
const Massage = () => {
  return (
    <MassageStyled>
      <Container>
        <div className="massages">
          <h2>Drop A Message</h2>
          <p className="lead">
            Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
            tincidunt maximus. Pellentesque tempus gravida viverra.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control as="textarea" rows={6} placeholder="Message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="main-btn">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </MassageStyled>
  );
};

const MassageStyled = styled.section`
  padding: 4rem 0;
  background: url(${bgMassage}) center top no-repeat;
  background-size: cover;
  min-height: 90vh;
  width: 100%;
  overflow: hidden;
  .container {
    @media (min-width: 1400px) {
      width: 50%;
    }
  }
  h2 {
    text-align: center;
    color: var(--white);
    padding: 17rem 0 0.5rem 0;
    font-size: 3rem;
  }
  p {
    color: var(--white);
    text-align: center;
    padding: 1rem 0 1rem 0;
    width: 70%;
    margin: 1rem auto 3rem;
    font-size: 1rem;
  }
  form {
    .form-control {
      padding: 1rem 0.75rem;
      border-radius: 0.6rem;
      margin: 1.5rem 0;
      border: none;
      &::placeholder {
        font-size: 14px;
      }

      &.textarea {
        min-height: 10rem;
      }
    }
    .main-btn {
      background: var(--secoundColor);
      border-color: var(--secoundColor);
      color: var(--white);
      width: 160px;
      height: 50px;

      display: block;
      border-radius: 0.5rem;
      letter-spacing: 1.5px;
      transition: all 0.3s;
      margin: 2rem auto;
      &:hover {
        background: var(--mainColor);
        border-color: var(--mainColor);
        color: var(--dark);
        box-shadow: 0 10px 30px rgba(var(--mainColor), 10%);
      }
    }
  }
`;
export default Massage;
