import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mark from "../assets/mark.png";
import Button from "@restart/ui/esm/Button";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import bgSecond from "../assets/bg2.png";
const Offer = () => {
  return (
    <PriceOffer>
      <Container>
        <h2>We Offer Simple Pricing Plan</h2>
        <p className="lead">
          Donec augue lorem, mollis quis dui sed, dictum vehicula turpis.
          Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi.
          Nullam posuere nec ex in malesuada.
        </p>
        <div className="price">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="price-item">
                <h5>level 1</h5>
                <h3>$15</h3>
                <p>For project managers, resource managers, admin staff etc</p>
                <ul>
                  <li>Aliquam Lacinia</li>
                  <li>Mollis Ornare Pretium</li>
                  <li>Aenean Pretium</li>
                  <li>Donec Convallis Metus</li>
                  <li>Integer Volutpat</li>
                  <li>Quis Euismod Pharetra</li>
                </ul>
                <Button className="btn main-btn">FREE TRIAL</Button>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="price-item suggest">
                <h5>level 2</h5>
                <h3>$15</h3>
                <p>For project managers, resource managers, admin staff etc</p>
                <ul>
                  <li>Aliquam Lacinia</li>
                  <li>Mollis Ornare Pretium</li>
                  <li>Aenean Pretium</li>
                  <li>Donec Convallis Metus</li>
                  <li>Integer Volutpat</li>
                  <li>Quis Euismod Pharetra</li>
                </ul>
                <Button className="btn main-btn">FREE TRIAL</Button>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="price-item">
                <h5>level 1</h5>
                <h3>$15</h3>
                <p>For project managers, resource managers, admin staff etc</p>
                <ul>
                  <li>Aliquam Lacinia</li>
                  <li>Mollis Ornare Pretium</li>
                  <li>Aenean Pretium</li>
                  <li>Donec Convallis Metus</li>
                  <li>Integer Volutpat</li>
                  <li>Quis Euismod Pharetra</li>
                </ul>
                <Button className="btn main-btn">FREE TRIAL</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PriceOffer>
  );
};

const PriceOffer = styled.section`
  background: url(${bgSecond}) center center no-repeat;
  background-size: cover;
  text-align: center;
  padding: 4rem 0;
  h2 {
    color: var(--white);
    padding: 1rem 0;
    font-size: 2.5rem;
    @media (max-width: 992px) {
      font-size: 2rem;
    }
  }
  .lead {
    color: var(--white);
    padding: 1rem 0 4rem;
    width: 50%;
    margin: auto;
    font-size: 1rem;
    @media (max-width: 992px) {
      width: 90%;
    }
  }
  .price-item {
    padding: 2rem;
    margin-inline: 2rem;
    background: var(--white);
    border-radius: 1rem;
    &.suggest {
      background-color: #6837fa;
      h5 {
        color: var(--white);
      }
      h3 {
        color: var(--white);
      }
      p {
        color: var(--white);
      }
    }
    h5 {
      padding: 1rem 0;
      color: var(--dark);
    }
    h3 {
      font-size: 4rem;
      font-weight: 200;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    ul {
      list-style: none;
      margin: 2rem 0;

      li {
        position: relative;
        /* text-align: left; */
        color: var(--lightBlue);
        margin-block: 0.5rem;
        &::before {
          content: "";
          position: absolute;
          left: -10%;
          top: 50%;
          transform: translate(15%, -50%);
          background: url(${mark}) center center no-repeat;
          height: 40px;
          width: 40px;
        }
      }
    }
    .main-btn {
      background: var(--secoundColor);
      border-color: var(--secoundColor);
      color: var(--white);
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
export default Offer;
