import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Container } from "react-bootstrap";
import styled from "styled-components";
import imagetest from "../assets/Ellipse.png";
const Testmonails = () => {
  return (
    <TestmonailsStyled>
      <h2>Testimonials</h2>
      <Container>
        <Carousel>
          <Carousel.Item>
            <div className="testmonails">
              <div className="row">
                <div className="col-lg-4">
                  <TestimonailCard>
                    <div className="image">
                      <img src={imagetest} alt="n" />
                    </div>
                    <h3>Jane Doe</h3>
                    <h6>CEO, Inkyy</h6>
                    <p>
                      Donec augue lorem, mollis quis dui sed, dictum vehicula
                      turpis. Aliquam bibendum vel mi id tempor. Sed efficitur
                      scelerisque mi. Nullam posuere nec ex in malesuada.
                      Praesent ligula ante, accumsan eget ornare vel.
                    </p>
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </TestimonailCard>
                </div>
                <div className="col-lg-4">
                  <TestimonailCard>
                    <div className="image">
                      <img src={imagetest} alt="n" />
                    </div>
                    <h3>Jane Doe</h3>
                    <h6>CEO, Inkyy</h6>
                    <p>
                      Donec augue lorem, mollis quis dui sed, dictum vehicula
                      turpis. Aliquam bibendum vel mi id tempor. Sed efficitur
                      scelerisque mi. Nullam posuere nec ex in malesuada.
                      Praesent ligula ante, accumsan eget ornare vel.
                    </p>
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </TestimonailCard>
                </div>
                <div className="col-lg-4">
                  <TestimonailCard>
                    <div className="image">
                      <img src={imagetest} alt="n" />
                    </div>
                    <h3>Jane Doe</h3>
                    <h6>CEO, Inkyy</h6>
                    <p>
                      Donec augue lorem, mollis quis dui sed, dictum vehicula
                      turpis. Aliquam bibendum vel mi id tempor. Sed efficitur
                      scelerisque mi. Nullam posuere nec ex in malesuada.
                      Praesent ligula ante, accumsan eget ornare vel.
                    </p>
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </TestimonailCard>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </TestmonailsStyled>
  );
};

const TestmonailsStyled = styled.section`
  padding: 6rem 0;
  background: #fbfcfe;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 4rem;
  }
  .testmonails {
    padding: 4rem 0;
  }
`;
const TestimonailCard = styled.div`
  background: var(--white);
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  margin-inline: 1rem;
  box-shadow: 0px 7px 20px rgb(0 0 0 / 6%);
  .image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    margin: -70px auto 0;
  }
  p {
    padding: 0.5rem;
    color: #888;
  }
  h6 {
    color: var(--lightBlue);
  }
  svg {
    color: var(--mainColor);
  }
`;
export default Testmonails;
