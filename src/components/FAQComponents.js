import { Container } from "react-bootstrap";
import styled from "styled-components";
import iconFaq from "../assets/iconfaq.png";
const FAQComponents = () => {
  return (
    <FaqStyled>
      <Container>
        <h2>Frequently Asked Questions</h2>
        <p className="lead">
          Donec augue lorem, mollis quis dui sed, dictum vehicula turpis.
          Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi.
          Nullam posuere nec ex in malesuada.
        </p>
        <div className="row mb-2">
          <div className="col-lg-6">
            <div className="faq-container">
              <div className="row mb-2">
                <div className="col-2">
                  <img src={iconFaq} alt="faq" />
                </div>
                <div className="col-10">
                  <h4>Fusce Sodales Placerat Nibh Eget ?</h4>
                  <p>
                    Duis sagittis orci non risus semper feugiat. Fusce
                    ullamcorper sollicitudin velit et pretium. Ut quis orci sed
                    dolor accumsan ultrices. Nunc ut ornare tellus. Nulla ut
                    eros non lorem rhoncus blandit.
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-2">
                  <img src={iconFaq} alt="faq" />
                </div>
                <div className="col-10">
                  <h4>Fusce Sodales Placerat Nibh Eget ?</h4>
                  <p>
                    Duis sagittis orci non risus semper feugiat. Fusce
                    ullamcorper sollicitudin velit et pretium. Ut quis orci sed
                    dolor accumsan ultrices. Nunc ut ornare tellus. Nulla ut
                    eros non lorem rhoncus blandit.
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-2">
                  <img src={iconFaq} alt="faq" />
                </div>
                <div className="col-10">
                  <h4>Fusce Sodales Placerat Nibh Eget ?</h4>
                  <p>
                    Duis sagittis orci non risus semper feugiat. Fusce
                    ullamcorper sollicitudin velit et pretium. Ut quis orci sed
                    dolor accumsan ultrices. Nunc ut ornare tellus. Nulla ut
                    eros non lorem rhoncus blandit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-container">
              <div className="row mb-2 ">
                <div className="col-2">
                  <img src={iconFaq} alt="faq" />
                </div>
                <div className="col-10">
                  <h4>Fusce Sodales Placerat Nibh Eget ?</h4>
                  <p>
                    Duis sagittis orci non risus semper feugiat. Fusce
                    ullamcorper sollicitudin velit et pretium. Ut quis orci sed
                    dolor accumsan ultrices. Nunc ut ornare tellus. Nulla ut
                    eros non lorem rhoncus blandit.
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-2">
                  <img src={iconFaq} alt="faq" />
                </div>
                <div className="col-10">
                  <h4>Fusce Sodales Placerat Nibh Eget ?</h4>
                  <p>
                    Duis sagittis orci non risus semper feugiat. Fusce
                    ullamcorper sollicitudin velit et pretium. Ut quis orci sed
                    dolor accumsan ultrices. Nunc ut ornare tellus. Nulla ut
                    eros non lorem rhoncus blandit.
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-2">
                  <img src={iconFaq} alt="faq" />
                </div>
                <div className="col-10">
                  <h4>Fusce Sodales Placerat Nibh Eget ?</h4>
                  <p>
                    Duis sagittis orci non risus semper feugiat. Fusce
                    ullamcorper sollicitudin velit et pretium. Ut quis orci sed
                    dolor accumsan ultrices. Nunc ut ornare tellus. Nulla ut
                    eros non lorem rhoncus blandit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FaqStyled>
  );
};

const FaqStyled = styled.section`
  padding: 6rem 0;
  h2 {
    padding: 1rem 0;
    font-size: 3rem;
    text-align: center;
    @media (max-width: 992px) {
      font-size: 2.5rem;
    }
  }
  .lead {
    width: 50%;
    margin: 1rem auto 4rem auto;
    text-align: center;
    font-size: 1rem;
    @media (max-width: 992px) {
      font-size: 0.9rem;
      width: 90%;
    }
  }

  .faq-container {
    padding: 0.6rem;
    margin-bottom: 1rem;

    h4 {
      color: var(--dark);
      font-weight: 500;
    }
    p {
      color: var(--lightBlue);
      font-weight: 300;
    }
  }
`;

export default FAQComponents;
