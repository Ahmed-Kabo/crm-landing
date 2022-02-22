import { Container, Button } from "react-bootstrap";
import uxImage from "../assets/ux.png";
import styled from "styled-components";

const UxStructure = () => {
  return (
    <UseStructureStyle>
      <Container>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="uxStructure_image">
              <img src={uxImage} alt="ux" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="uxStructure_content">
              <h2>Perfect UX Structure</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui orci, sodales a pellentesque vel, pharetra quis elit. In
                scelerisque lacinia diam eget egestas. Etiam non dui eu felis
                vestibulum.
              </p>
              <Button className="main-btn">GET IT NOW</Button>
            </div>
          </div>
        </div>
      </Container>
    </UseStructureStyle>
  );
};

const UseStructureStyle = styled.section`
  padding: 3rem 0;
  img {
    width: 100%;
  }
  .uxStructure_content {
    h2 {
      font-size: 3rem;
      color: var(--dark);
      margin: 1.5rem 0;
      @media (max-width: 992px) {
        font-size: 2.5rem;
      }
    }
    p {
      font-size: 1.1rem;
      color: var(--lightBlue);
      margin: 1.5rem 0;
      @media (max-width: 992px) {
        font-size: 0.9rem;
      }
    }
    .main-btn {
      background: var(--secoundColor);
      border-color: var(--secoundColor);
      width: 160px;
      height: 50px;
      border-radius: 0.5rem;
      letter-spacing: 1.5px;
      transition: all 0.3s;
      &:hover {
        background: var(--mainColor);
        border-color: var(--mainColor);
        color: var(--dark);
        box-shadow: 0 10px 30px rgba(var(--mainColor), 10%);
      }
    }
  }
`;

export default UxStructure;
