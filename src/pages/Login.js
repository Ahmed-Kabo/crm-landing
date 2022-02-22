import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import Lottie from "react-lottie";

const Login = () => {
  //animation

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../animation/lottie.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //valdation form from bootstrap
  const [validated, setValidated] = useState(false);

  //////////////////////////////////////////////////////

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();

    //valdation from from bootstrap
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // end valdation from from bootstrap

    const DataLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    await axios
      .post("https://crm.boxbyld.tech/api/v1/users/login", DataLogin)
      .then((response) => {
        console.log("Done");
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  return (
    <LoginStyled>
      <Container>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="animation">
              <Lottie options={defaultOptions} />
            </div>
          </div>
          <div className="col-lg-6">
            <Form onSubmit={submitHandler} noValidate validated={validated}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  ref={passwordRef}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </LoginStyled>
  );
};

const LoginStyled = styled.section`
  padding: 4rem 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Login;
