import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterStyled className="footer">
        <Container>
          <div className="row">
            <div className="col-lg-4">
              <div className="footerItem">
                <h4>About Saas Temp</h4>
                <p>
                  Aliquam fermentum tellus vitae nisl dictum vel sodales diam
                  molestie. Pellentesque nec orci posuere, feugiat quam sed.
                  <br />
                  Nam tincidunt lectus quis nibh ultrices, vitae congue risus
                  porta mauris eros.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footerItem">
                <h4>Quick Link</h4>
                <ul>
                  <li>Career</li>
                  <li>Testimonail</li>
                  <li>Support </li>
                  <li>Pricing</li>
                  <li>About App </li>
                  <li>
                    <NavLink to="/agent/login"> Login </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footerItem">
                <h4>Subscribe Our Newsletter</h4>
                <Form>
                  <Form.Group className="mb-3 row" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      className="col-8"
                      placeholder="Enter Name"
                    />

                    <Button
                      variant="primary"
                      className="col-4 secound-btn"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
                <div className="icons">
                  <a href="">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FooterStyled>
      <CopRight>
        <Container>
          <p> &copy; All copyight 2021</p>
        </Container>
      </CopRight>
    </>
  );
};

const FooterStyled = styled.section`
  padding: 6rem 0;
  .footerItem {
    h4 {
      font-size: 1.7rem;
      margin-bottom: 2rem;
    }
    p {
      color: var(--lightBlue);
    }
    ul {
      li {
        padding: 0.5rem 0;
        text-align: left;
        font-size: 0.9rem;
        color: var(--lightBlue);
        a {
          text-decoration: none;
        }
      }
    }
    .form-control {
      width: 60%;
      border-radius: 0.3rem 0 0 0.3rem;
      padding: 0.8rem 0.5rem;
    }
    .secound-btn {
      border-radius: 0 10px 10px 0;
      background: #feb301;
      color: var(--white);
      border-color: var(--mainColor);
    }

    .icons {
      svg {
        width: 40px;
        height: 40px;
        padding: 0.8rem;
        margin-right: 1rem;
        border-radius: 50%;
        background: var(--secoundColor);
        color: var(--white);
        cursor: pointer;
      }
    }
  }
`;

const CopRight = styled.div`
  padding: 1rem 0;
  text-align: center;
  background: var(--dark);
  color: var(--white);
`;
export default Footer;
