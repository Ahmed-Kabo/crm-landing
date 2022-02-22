import useIcon from "../assets/useable.svg";
import supportIcon from "../assets/support.svg";
import perfectIcon from "../assets/perfect.svg";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const ChooseUs = () => {
  return (
    <ChooseUsStyled>
      <Container>
        <h2 className="text-center">Why Choose Us</h2>
        <p className="text-center chooses_P">
          Proin rhoncus, neque sed congue commodo, orci magna tristique ipsum,
          vel egestas risus augue quis justo.
        </p>
        <div className=" row">
          <div className="col-md-4">
            <div className="cardContent">
              <div className="icon">
                <img src={useIcon} alt="Support" />
              </div>
              <h4 className="cardHeader">Useable Guide</h4>
              <p className="lead">
                Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec
                tempor finibus ante ac luctus. Fusce facilisis nisi tempor
                finibus ante ac luctus facilisi.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardContent">
              <div className="icon">
                <img src={perfectIcon} alt="Support" />
              </div>
              <h4 className="cardHeader">Perfect Ui/Ux System</h4>
              <p className="lead">
                Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec
                tempor finibus ante ac luctus. Fusce facilisis nisi tempor
                finibus ante ac luctus facilisi.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardContent">
              <div className="icon">
                <img src={supportIcon} alt="Support" />
              </div>
              <h4 className="cardHeader">24h/7 Days Support</h4>
              <p className="lead">
                Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec
                tempor finibus ante ac luctus. Fusce facilisis nisi tempor
                finibus ante ac luctus facilisi.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </ChooseUsStyled>
  );
};

const ChooseUsStyled = styled.section`
  padding: 5rem 0;
  background: #fbfcfe;
  h2 {
    margin: 3rem 0 1rem 0;
    font-size: 3rem;
  }
  .chooses_P {
    width: 50%;
    margin: 2rem auto 4rem auto;
    color: var(--lightBlue);
  }

  .cardContent {
    padding: 3.5rem;
    margin-inline: 1.5rem;
    transition: all 0.3s;
    border-radius: 1rem;
    &:hover {
      background: #fff;
      transform: translateY(-0.5rem);
      box-shadow: 0 20px 40px #4000ff11;
    }
    .lead {
      width: 100%;
      font-size: 1rem;
      margin: 0.8rem 0;
      color: var(--lightBlue);
    }
  }
`;

export default ChooseUs;
